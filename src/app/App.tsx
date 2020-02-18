import * as React from 'react';
import { Store } from 'redux'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'
import { ApplicationState } from '../store';
import { Provider } from 'react-redux';
import Routes from './routes/routes';
import Container from './global/Container/Container';
import Header from './global/Header/Header';
import Footer from './global/Footer/Footer';

interface AppProps {
    store: Store<ApplicationState>
    history: History
};

const App: React.FC<AppProps> = ({ store, history }) => (
<Provider store={store}>
    <ConnectedRouter history={history}>
        <Container>
            <Header />
            <Routes />
            <Footer />
        </Container>
    </ConnectedRouter>
</Provider>
);

export default App;
