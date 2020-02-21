import { Dispatch } from 'redux';
import { WeatherActionTypes } from './types'
import axios from 'axios';
import { apiEndPoint, apiAppKey } from '../../constants/apiInfo';
import { convertWeatherResponse } from './helpers';

export const setCityWeatherInfo = (cityName: string) => {
    return (dispatch: Dispatch) => {
        const apiRequestUrl = `${apiEndPoint}?q=${cityName}&appid=${apiAppKey}&units=metric `;
        dispatch({ type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'pending' });

        return axios.get(apiRequestUrl)
        .then(response => {
            const { city, daysWeather } = convertWeatherResponse(response.data);
            dispatch({ type: WeatherActionTypes.SET_CITY, payload: city });
            dispatch({ type: WeatherActionTypes.SET_CITY_WEATHER, payload: daysWeather });
            dispatch({ type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'success' });
        })
        .catch(() => {
            dispatch({ type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'error' });
        })
    };
}; 
