import { Store, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { ApplicationState, createRootReducer } from './store';
import { localStorageMiddlewate } from './store/middlewares/localStorage';

export default function configureStore(history: History, initialState: ApplicationState): Store<ApplicationState> {
    const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        createRootReducer(history),
        initialState,
        storeEnhancers(applyMiddleware(routerMiddleware(history), thunkMiddleware, localStorageMiddlewate))
    );

    return store
};