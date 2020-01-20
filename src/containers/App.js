import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Home from '../components/widget/Home'
import '../App.css';
import '../css/DiarioUniverso.css';

function App() {
   return (
			
				<Switch>
					<Route path={'/'} exact component={Home} />
					<Route component={Home} />
				</Switch>
			
		);
}

export default App;
