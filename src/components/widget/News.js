import React from "react";
import { getNews } from "../../services/NewService";
const GLOBAL = require("../../helpers/globals");
class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      categoria: this.props.categoria,
      showContentWidget: false
    };
  }
  componentDidMount() {
    this.loadNews();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        categoria: nextProps.categoria
      },
      () => {
        this.loadNews();
      }
    );
  }

  loadNews() {
    getNews()
      .then(res => {
        let MasLeidas = [];
        let arrayNoticias = [];
        //ORDENAR ARRAY
        MasLeidas = res.data.pages.sort(this.compare);
        //FILTRAR SECCION:GUAYAQUIL;ENTRETENIMIENTO;ETC
        let seccion = GLOBAL.menu.filter(m => {
          return m.codigo === this.state.categoria;
        });

        arrayNoticias = MasLeidas.filter(noticia => {
          if (this.state.categoria !== null && this.state.categoria !== 0) {
            return (
              noticia.stats.article !== 0 &&
              noticia.sections.includes(seccion[0].name.toLowerCase())
            );
          } else {
            return noticia.stats.article !== 0;
          }
        });

        this.setState({
          pages: arrayNoticias.slice(0, GLOBAL.limit_news_masleidas),
          showContentWidget: true
        });
      })
      .catch(e => {
        throw e;
      });
  }

  compare(a, b) {
    return b.stats.visits - a.stats.visits;
  }

  render() {
    const pages = this.state.pages.map(
      (page, index) =>
        page.stats.article !== 0 && (
          <li className="item" key={index}>
            <a href={GLOBAL.protocol + page.path} target="_parent">
              {page.title}
            </a>
          </li>
        )
    );

    return (
      <div id="div_iframe_lomas_chartbeat" className="pane-lo-mas">
        {pages && <ul className="list border rank">{pages}</ul>}
        {pages.length === 0 && <h2>No hay noticias...</h2>}
      </div>
    );
  }
}

export default News;
