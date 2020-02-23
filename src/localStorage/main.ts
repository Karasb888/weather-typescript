import { LocalStorageActionTypes, LocalStorageAction, LocalStorageNames } from "./types";
import { addCity, removeCity } from "./favoriteCities";
import { FavoriteCityObj } from "../store/favoritesCity";

export const localStorageHandler = (action: LocalStorageAction) => {
    switch(action.type) {
        case LocalStorageActionTypes.ADD_FAVORITE_CITY:
            addCity(action.payload);
        break;
        case LocalStorageActionTypes.REMOVE_FAVORITE_CITY:
            removeCity(action.payload);
        break;
    }
};

export const localStorageGetters = {
    favoriteCities: (): Array<FavoriteCityObj> => {
        const storageData = localStorage.getItem(LocalStorageNames.favoriteCities);
        return storageData ? JSON.parse(storageData) : [];
    }
};