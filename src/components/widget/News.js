import React from 'react';
import { getNews } from '../../services/NewService';
const GLOBAL = require('../../helpers/globals');
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
				// let paginas = this.state.pages;
				// let paginasFiltradas = [];
				// console.log('this.state.categoria',this.state.categoria);
				// let seccion = GLOBAL.menu.filter(m => {
				// 	return (m.codigo === this.state.categoria);
				// });
				// console.log('seccion', seccion);
				// if (this.state.categoria !== 0 && this.state.categoria) {
				// 	paginasFiltradas = paginas.filter(p => {
				// 		return p.sections.includes(seccion[0].name.toLowerCase());
				// 	});
				// 	this.setState({
				// 		pages: paginasFiltradas.slice(0, GLOBAL.limit_news_masleidas),
				// 		showContentWidget: true
				// 	},()=>{
				// 		console.log('pages', this.state.pages);
				// 	});
				// }else{
				// 	this.setState({
				// 		pages:paginas,
				// 		showContentWidget: true
				// 	},()=>{
				// 		console.log('pages', this.state.pages);
				// 	});
				// }
			}
		);
	}

	loadNews() {
		getNews()
			.then(res => {
				console.log('res', res.data.pages);
             console.log('categoria', this.state.categoria);
			 
				let MasLeidas = [];
				let arrayNoticias = [];
				//ORDENAR ARRAY
				MasLeidas = res.data.pages.sort(this.compare);
				let seccion = GLOBAL.menu.filter(m => {
					console.log('m.codigo ', m.codigo);
					
					return m.codigo === this.state.categoria;
				});
				console.log('seccion', seccion);
				
				arrayNoticias = MasLeidas.filter(noticia => {
					if (this.state.categoria !== null && this.state.categoria !== 0) {
						return (
							noticia.stats.article !== 0 &&
							noticia.sections.includes(seccion[0].name.toLowerCase())
						);
					} else {
						console.log("WWWW");
						
						return noticia.stats.article !== 0;
					}
				});
				console.log('arrayNoticias', arrayNoticias);
				
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
					<li className='item' key={index}>
						<a href={GLOBAL.protocol + page.path} target='_parent'>
							{page.title}
						</a>
					</li>
				)
		);

		return (
			<div id='div_iframe_lomas_chartbeat' className='pane-lo-mas'>
				<ul className='list border rank'>{pages}</ul>
			</div>
		);
	}
}

export default News;
