import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './app/global/App';
import configureStore from "./configureStore";
import { createBrowserHistory } from "history";

const history = createBrowserHistory()
const initialState = window.INITIAL_REDUX_STATE
const store = configureStore(history, initialState)

ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById('app')
);
