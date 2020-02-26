import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { weatherReducer, WeatherState } from './weather';
import { favoriteCityReducer, FavoriteCityState } from './favoritesCity';
import { UserLocationState, userLocationReducer } from './userLocation';

export interface ApplicationState {
    weather: WeatherState;
    userLocation: UserLocationState;
    favoriteCities: FavoriteCityState;
    router: RouterState;
};

export const createRootReducer = (history: History) => combineReducers({
    weather: weatherReducer,
    userLocation: userLocationReducer,
    favoriteCities: favoriteCityReducer,
    router: connectRouter(history)
});