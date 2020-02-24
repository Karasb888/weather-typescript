import * as React from 'react';
import { Store } from 'redux'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'
import { ApplicationState } from '../store';
import { Provider } from 'react-redux';
import Routes from './routes/routes';
import Header from './global/Header/Header';
import { Grid, Container } from '@material-ui/core';
import Sidebar from './global/Sidebar/Sidebar';

interface Props {
    readonly store: Store<ApplicationState>;
    readonly history: History;
};

const App: React.FC<Props> = ({ store, history }) => (
<Provider store={store}>
    <ConnectedRouter history={history}>
        <Container maxWidth="lg">
            <Header />
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Sidebar />
                </Grid>
                <Grid item xs={9}>
                    <Routes />
                </Grid>
            </Grid>
        </Container>
    </ConnectedRouter>
</Provider>
);

export default App;
