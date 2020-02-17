export type TempObj<T> = {
    [P in keyof T]: T[P]
};

export type WeatherListItemObj = {
    id: number,
    main: string,
    description: string,
    icon: string
};

export type WeatherListObj = {
    dt: number,
    temp: TempObj<number>,
    pressure: number,
    humidity: number,
    weather: Array<WeatherListItemObj>,
    speed: number,
    deg: number,
    clouds: number,
    snow: number
};

export type WeatherObj = {
    cod: string,
    message: string | number
    city: {
        geoname_id: number,
        name: string,
        lat: number,
        lon: number,
        country: number,
        iso2: string,
        type: string,
        population: number
    },
    cnt: number,
    list: Array<WeatherListObj>
};

export type fetchStatus = 'success' | 'pending' | 'error' | 'none';

export enum WeatherActionTypes {
    SET_CITY_WEATHER = 'SET_CITY_WEATHER',
    SET_CITY_AND_DATE_WEATHER = 'SET_CITY_AND_DATE_WEATHER',
    SET_FETCH_STATUS_WEATHER_CITY = 'SET_FETCH_STATUS_WEATHER_CITY'
};

export interface WeatherState {
    weatherCity: WeatherObj,
    fetchStatusWeatherCity: fetchStatus,
    weatherCityAndDate: WeatherListObj
};
