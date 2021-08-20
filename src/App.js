import { Provider } from 'react-redux';

import GlobalStyles from './styles/Global';
import Routes from './routes';
import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<GlobalStyles />
			<Routes />
		</Provider>
	);
};

export default App;
