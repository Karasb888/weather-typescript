import thunk, { ThunkDispatch } from 'redux-thunk';
import weatherApiResponse from '../mockedData/mockedWeatherApiResponse.data';
import axios from 'axios';
import { weatherApiEndPoint, weatherApiAppKey } from '../../src/constants/apiInfo';
import  MockAdapter from 'axios-mock-adapter';
import { WeatherActionTypes, setCityWeatherInfo } from '../../src/store/weather';
import { convertWeatherResponse } from '../../src/store/weather/helpers';
import { AnyAction } from 'redux';
import createMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = createMockStore<{}, ThunkDispatch<{}, undefined, AnyAction>>(middlewares);
const mock = new MockAdapter(axios);
const cityName = 'Kiev';

const apiRequestUrl = `${weatherApiEndPoint}?q=${cityName}&appid=${weatherApiAppKey}&units=metric `;
const { city, daysWeather } = convertWeatherResponse(weatherApiResponse);

afterEach(() => {
    mock.reset();
});

describe('++++ ASYNC actions setCityWeatherInfo ++++', () => {
    it('creates SET_CITY, SET_CITY_WEATHER, SET_FETCH_STATUS_WEATHER_CITY when get 200 status code and data', () => {
        mock.onGet(apiRequestUrl).reply(200, weatherApiResponse);
        const expectedActions = [
            { type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'pending' },
            { type: WeatherActionTypes.SET_CITY, payload: city },
            { type: WeatherActionTypes.SET_CITY_WEATHER, payload: daysWeather },
            { type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'success' }
        ];
        const store = mockStore({});
        return store.dispatch(setCityWeatherInfo(cityName)).finally(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates SET_FETCH_STATUS_WEATHER_CITY on network error while fetching', () => {
        const expectedActions = [
            { type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'pending' },
            { type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'error' }
        ];
        const store = mockStore({});
        mock.onGet(apiRequestUrl).networkErrorOnce();
        return store.dispatch(setCityWeatherInfo(cityName)).finally(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('creates SET_FETCH_STATUS_WEATHER_CITY on error response (400-499)', () => {
        const expectedActions = [
            { type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'pending' },
            { type: WeatherActionTypes.SET_FETCH_STATUS_WEATHER_CITY, payload: 'error' }
        ];
        const store = mockStore({});
        mock.onGet(apiRequestUrl).reply(404, { error: 'Some response error text' });
        return store.dispatch(setCityWeatherInfo(cityName)).finally(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});