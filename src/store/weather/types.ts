// Api response types
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
    dt_txt: string,
    temp: TempObj<number>,
    pressure: number,
    humidity: number,
    weather: Array<WeatherListItemObj>,
    speed: number,
    deg: number,
    clouds: number,
    snow: number
};

export type CityObj = {
    geoname_id: number,
    name: string,
    lat: number,
    lon: number,
    country: number,
    iso2: string,
    type: string,
    population: number
};

export type WeatherResponseObj = {
    cod: number,
    message: string | number
    city: CityObj,
    cnt: number,
    list: Array<WeatherListObj>
};

//===================================================

export type NewWeatherDayObj = {
    date: string,
    dayTimestamp: number,
    timeDayWeather: Array<WeatherListObj>
};

export type WeatherCity = Array<NewWeatherDayObj> | null;
export type WeatherCityAndDate = Array<WeatherListObj> | null;
export type FetchStatusType = 'success' | 'pending' | 'error' | 'none';
export type City = CityObj | null;

export enum WeatherActionTypes {
    SET_CITY = 'SET_CITY',
    SET_CITY_WEATHER = 'SET_CITY_WEATHER',
    SET_CITY_AND_DATE_WEATHER = 'SET_CITY_AND_DATE_WEATHER',
    SET_FETCH_STATUS_WEATHER_CITY = 'SET_FETCH_STATUS_WEATHER_CITY'
};

export interface WeatherState {
    city: City,
    weatherCity: WeatherCity,
    fetchStatusWeatherCity: FetchStatusType,
    weatherCityAndDate: WeatherCityAndDate
};
