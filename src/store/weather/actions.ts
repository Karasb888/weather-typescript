import { Dispatch } from 'redux';
import { WeatherActionTypes, WeatherState } from './types'
import axios from 'axios';
import { apiEndPoint, apiAppKey } from '../../constants/apiInfo';

export const setCityWeatherInfo = (cityName: string) => {
    return (dispatch: Dispatch, getState: Function) => {
        const apiRequestUrl = `${apiEndPoint}?q=${cityName}&appid=${apiAppKey}`;
        dispatch({ type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'pending' });

        return axios.get(apiRequestUrl).then(response => {
            dispatch({ type: WeatherActionTypes.SET_CITY_WEATHER, payload: response.data })
            dispatch({ type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'success' });
        })
        .catch(err => {
            dispatch({ type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'error' });
        })
    };
};

export const setCityAndDateWeatherInfo = (date: number) => {
    return (dispatch: Dispatch, getState: Function) => {
        const state = getState();
        const { weatherCity } = state;        
        const weatherCityAndDate = weatherCity.consolidated_weather.find((dateWeather: any) => {
            return dateWeather.applicable_date === date;
        });
        
        dispatch({ type: WeatherActionTypes.SET_CITY_AND_DATE_WEATHER, payload: weatherCityAndDate });
    };
};