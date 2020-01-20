import React from 'react';
import { getNews } from '../../services/NewService';
const GLOBAL = require('../../helpers/globals');
class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pages: [],
			showContentWidget: false
		};
	}
	componentDidMount() {
		this.loadNews();
	}

	loadNews() {
		getNews()
			.then(res => {
				let MasLeidas = [];
				//ORDENAR ARRAY
				MasLeidas = res.data.pages.sort(this.compare);
				let arrayNoticias = MasLeidas.filter(noticia => {
					return noticia.stats.article !== 0;
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
