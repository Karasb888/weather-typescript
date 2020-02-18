import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { weatherReducer, WeatherState } from './weather';
import 'normalize.css';

export interface ApplicationState {
    weather: WeatherState
    router: RouterState
};

export const createRootReducer = (history: History) =>
combineReducers({
    weather: weatherReducer,
    router: connectRouter(history)
})