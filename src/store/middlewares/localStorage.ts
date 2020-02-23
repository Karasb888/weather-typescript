import { FavoritesCityActionTypes } from "../favoritesCity";
import { Middleware } from "redux";
import { localStorageHandler, LocalStorageActionTypes } from "../../localStorage";

export const localStorageMiddlewate: Middleware = store => next => action => {
    switch(action.type) {
        case(FavoritesCityActionTypes.SET_FAVORITE_CITY):
            localStorageHandler({ type: LocalStorageActionTypes.ADD_FAVORITE_CITY, payload: action.payload });
            break;
        case(FavoritesCityActionTypes.REMOVE_FAVORITE_CITY):
            localStorageHandler({ type: LocalStorageActionTypes.REMOVE_FAVORITE_CITY, payload: action.payload });
            break;
    };
    return next(action);
};