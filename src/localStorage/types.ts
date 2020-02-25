export enum LocalStorageActionTypes {
    ADD_FAVORITE_CITY ='ADD_FAVORITE_CITY',
    REMOVE_FAVORITE_CITY = 'REMOVE_FAVORITE_CITY'
};

export enum LocalStorageNames {
    favoriteCities = 'favoriteCities'
};

export interface LocalStorageAction {
    type: LocalStorageActionTypes;
    payload: any;
};