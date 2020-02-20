import 'normalize.css';
import './scss/global.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './app/App';
import configureStore from "./configureStore";
import { createHashHistory } from "history";

const history = createHashHistory();
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById('app')
);
