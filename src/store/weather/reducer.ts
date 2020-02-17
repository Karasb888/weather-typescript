import { Reducer } from 'redux'
import { WeatherState, WeatherActionTypes } from './types'

export const initialState: WeatherState = {
  city: null,
  weatherCity: null,
  weatherCityAndDate: null,
  fetchStatusWeatherCity: 'none'
};

const reducer: Reducer<WeatherState> = (state = initialState, action) => {
  switch (action.type) {
    case WeatherActionTypes.SET_CITY: {
      return { ...state, city: action.payload };
    };
    case WeatherActionTypes.SET_CITY_WEATHER: {
      return { ...state, weatherCity: action.payload };
    };
    case WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY: {
      return { ...state, fetchStatusWeatherCity: action.payload };
    };
    case WeatherActionTypes.SET_CITY_AND_DATE_WEATHER: {
      return { ...state, weatherCityAndDate: action.payload };
    };
    default: {
      return state
    }
  }
};

export { reducer as weatherReducer };