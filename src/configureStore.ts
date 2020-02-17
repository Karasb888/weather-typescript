import { Store, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware, { ThunkMiddleware } from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { ApplicationState, createRootReducer } from './store';

export default function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState> {
    const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        createRootReducer(history),
        initialState,
        storeEnhancers(applyMiddleware(routerMiddleware(history), thunkMiddleware))
    );

    return store
};