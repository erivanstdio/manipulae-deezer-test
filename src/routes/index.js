import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import TracksList from '../views/TracksList';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/'>
				<Redirect to='/tracks' />
			</Route>

			<Route exact path='/tracks'>
				<TracksList />
			</Route>

			<Route exact path='/favorites'></Route>
		</Switch>
	</BrowserRouter>
);

export default Routes;
