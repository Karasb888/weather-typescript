export interface FavoriteCityObj {
    id: number;
    name: string;
};

export interface FavoriteCityState {
    citiesList: Array<FavoriteCityObj>;
};

export enum FavoritesCityActionTypes {
    SET_FAVORITE_CITY = 'SET_FAVORITE_CITY',
    REMOVE_FAVORITE_CITY = 'REMOVE_FAVORITE_CITY'
};