import * as React from 'react';
import { Provider } from 'react-redux'
import { Store } from 'redux'
import Routes from './routes';
import Header from './Header';
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'

import { ApplicationState } from '../../store';

interface AppProps {
    store: Store<ApplicationState>
    history: History
};

const App: React.FC<AppProps> = ({ store, history }) => (
<Provider store={store}>
    <ConnectedRouter history={history}>
        <Header />
        <Routes />
    </ConnectedRouter>
</Provider>
);

export default App;
