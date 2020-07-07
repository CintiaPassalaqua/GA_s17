import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Pokemon from './pages/Pokemon';
import Home from './pages/Home';

export default function Routes() {
	return (
	  <BrowserRouter>
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/pokemon' component={Pokemon} />
		</Switch>
	  </BrowserRouter>
	);
}