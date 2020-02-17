import { Dispatch, Action } from 'redux';
import { WeatherActionTypes, NewWeatherDayObj } from './types'
import axios from 'axios';
import { apiEndPoint, apiAppKey } from '../../constants/apiInfo';
import { convertWeatherResponse } from './helpers';
import { ThunkDispatch } from 'redux-thunk';

type MyThunkDispatch = ThunkDispatch<{}, void, Action<WeatherActionTypes>>;

export const setCityWeatherInfo = (cityName: string) => {
    return (dispatch: Dispatch) => {
        const apiRequestUrl = `${apiEndPoint}?q=${cityName}&appid=${apiAppKey}`;
        dispatch({ type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'pending' });

        return axios.get(apiRequestUrl)
        .then(response => {
            const { city, daysWeather } = convertWeatherResponse(response.data);
            dispatch({ type: WeatherActionTypes.SET_CITY, payload: city })
            dispatch({ type: WeatherActionTypes.SET_CITY_WEATHER, payload: daysWeather })
            dispatch({ type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'success' });
        })
        .catch(err => {
            dispatch({ type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'error' });
        })
    };
};

export const setCityAndDateWeatherInfo = (date: string, cityName: string) => {
    return (dispatch: MyThunkDispatch, getState: Function) => {
        const state = getState();
        const { weather } = state;
        if (weather.weatherCity === null){
            dispatch(setCityWeatherInfo(cityName)).then(() => {
                const state = getState();
                const actualWeather = state.weather;
                const weatherCityAndDate = actualWeather.weatherCity.find((dateWeather: NewWeatherDayObj) => {
                    return dateWeather.date === date;
                });
                dispatch({ type: WeatherActionTypes.SET_CITY_AND_DATE_WEATHER, payload: weatherCityAndDate });
            });
        } else {
            const weatherCityAndDate = weather.weatherCity.find((dateWeather: NewWeatherDayObj) => {
                return dateWeather.date === date;
            });
            dispatch({ type: WeatherActionTypes.SET_CITY_AND_DATE_WEATHER, payload: weatherCityAndDate });
        }
    };
};
