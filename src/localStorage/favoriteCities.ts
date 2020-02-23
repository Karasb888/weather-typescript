import { FavoriteCityObj } from "../store/favoritesCity";

export const addCity = (favoriteCity: FavoriteCityObj) => {
    const oldCitiesArray = JSON.parse(localStorage.getItem('favoriteCities')) || [];
    const newCitiesArray = [...oldCitiesArray, favoriteCity];
    localStorage.setItem('favoriteCities', JSON.stringify(newCitiesArray));
};

export const removeCity = (id: number) => {
    const oldCitiesArray = JSON.parse(localStorage.getItem('favoriteCities')) || [];
    const newCitiesArray = oldCitiesArray.filter((favoriteCity: FavoriteCityObj) => favoriteCity.id !== id );
    localStorage.setItem('favoriteCities', JSON.stringify(newCitiesArray));
};
