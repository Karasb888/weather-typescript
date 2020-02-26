import { Dispatch } from 'redux';
import { WeatherActionTypes, WeatherResponseObj } from './types'
import axios from 'axios';
import { weatherApiEndPoint, weatherApiAppKey } from '../../constants/apiInfo';
import { convertWeatherResponse } from './helpers';

export const setCityWeatherInfo = (cityName: string) => {
    return (dispatch: Dispatch) => {
        const apiRequestUrl = `${weatherApiEndPoint}?q=${cityName}&appid=${weatherApiAppKey}&units=metric `;
        dispatch({ type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'pending' });

        return axios.get(apiRequestUrl)
        .then(response => {
            const data: WeatherResponseObj = response.data;
            const { city, daysWeather } = convertWeatherResponse(data);
            dispatch({ type: WeatherActionTypes.SET_CITY, payload: city });
            dispatch({ type: WeatherActionTypes.SET_CITY_WEATHER, payload: daysWeather });
            dispatch({ type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'success' });
        })
        .catch(() => {
            dispatch({ type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'error' });
        })
    };
};
