import { FavoritesCityActionTypes, FavoriteCityObj } from './types';
import { Dispatch } from 'redux';

export const setFavoriteCity = (favoriteCityObj: FavoriteCityObj) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: FavoritesCityActionTypes.SET_FAVORITE_CITY, payload: favoriteCityObj });
    };
};

export const removeFavoriteCity = (cityId: number) => {
    return (dispatch: Dispatch) => {
        dispatch({ type: FavoritesCityActionTypes.REMOVE_FAVORITE_CITY, payload: cityId });
    };
};