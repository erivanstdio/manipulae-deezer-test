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

            <Route exact path='*'>
                <h1>404</h1>
            </Route>
		</Switch>
	</BrowserRouter>
);

export default Routes;
