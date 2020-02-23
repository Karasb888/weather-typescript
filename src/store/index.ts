import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { weatherReducer, WeatherState } from './weather';
import { favoriteCityReducer, FavoriteCityState } from './favoritesCity';

export interface ApplicationState {
    weather: WeatherState;
    favoriteCities: FavoriteCityState;
    router: RouterState;
};

export const createRootReducer = (history: History) => combineReducers({
    weather: weatherReducer,
    favoriteCities: favoriteCityReducer,
    router: connectRouter(history)
});