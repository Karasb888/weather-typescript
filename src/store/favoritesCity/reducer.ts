import { Reducer } from 'redux'
import { FavoriteCityState, FavoritesCityActionTypes } from './types';
import { localStorageGetters } from '../../localStorage';

export const initialState: FavoriteCityState = {
    citiesList: localStorageGetters.favoriteCities()
};

const reducer: Reducer<FavoriteCityState> = (state = initialState, action) => {
	switch (action.type) {
		case FavoritesCityActionTypes.SET_FAVORITE_CITY: {
			return { ...state, citiesList: [...state.citiesList, action.payload] };
		};
		case FavoritesCityActionTypes.REMOVE_FAVORITE_CITY: {
			return { ...state, citiesList: state.citiesList.filter(city => city.id !== action.payload) }
		};
		default: {
			return state
		}
	}
};

export { reducer as favoriteCityReducer };
