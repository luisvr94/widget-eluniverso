import React from 'react';
import Header from './Header';
import TitleWidget from './TitleWidget';
import News from './News';

///import Loader from '../loaders/Line';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className='panel-pane pane-block pane-block-823 widget pane-block widget'>
					<TitleWidget />
					<div className='pane-content'>
						<News />
					</div>
					{/* {this.props.loadingMore && this.props.news.length > 0 && (
						<div>
							<Loader />
						</div>
					)} */}
				</div>
			</div>
		);
	}
}

export default Home;
