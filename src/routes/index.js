import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../views/Home';
import TracksList from '../views/TracksList';
import Favorites from '../views/Favorites';

import Header from '../components/Header';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/'>
				<Header />
				<Home />
			</Route>

			<Route exact path='/tracks'>
				<Header />
				<TracksList />
			</Route>

			<Route exact path='/favorites'>
				<Header />
				<Favorites />
			</Route>

			<Route exact path='*'>
				<h1>404</h1>
			</Route>
		</Switch>
	</BrowserRouter>
);

export default Routes;
