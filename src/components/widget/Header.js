import React from 'react';
const GLOBAL = require('../../helpers/globals');

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: GLOBAL.menu,
			selectedMenu: null
		};
	}

	handleChangeNews = event => {
		console.log('handleChange', event.target.value);
		this.setState({
			selectedMenu: event.target.value
		});
	};
	render() {
		let Menu = this.state.menu.map((item, index) => (
			<option key={index} value={item.codigo}>
				{item.name}
			</option>
		));

		return (
			<div>
				<h2 className='header-widget'>Filtrar Noticias</h2>
				<select onChange={this.handleChangeNews}>{Menu}</select>
			</div>
		);
	}
}
