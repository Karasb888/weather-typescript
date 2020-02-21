// Api response types
export type DayTimeWeatherObj = {
    id: number;
    main: string;
    description: string;
    icon: string;
};

export type WeatherListObj = {
    dt: number;
    dt_txt: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    };
    weather: Array<DayTimeWeatherObj>;
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    sys: {
        pod: string;
    };
};

export type CityObj = {
    id: number;
    name: string;
    coord: {
        lat: number;
        lon: number;
    };
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
    population: number;
};

export type WeatherResponseObj = {
    cod: number;
    message: string | number;
    city: CityObj;
    cnt: number;
    list: Array<WeatherListObj>;
};

export type NewWeatherDayObj = {
    date: string;
    dayTimestamp: number;
    timeDayWeather: Array<WeatherListObj>;
};

export type WeatherCity = Array<NewWeatherDayObj> | null;
export type FetchStatusType = 'success' | 'pending' | 'error' | 'none';
export type City = CityObj | null;

export enum WeatherActionTypes {
    SET_CITY = 'SET_CITY',
    SET_CITY_WEATHER = 'SET_CITY_WEATHER',
    SET_FETCH_STATUS_WEATHER_CITY = 'SET_FETCH_STATUS_WEATHER_CITY'
};

export interface WeatherState {
    city: City;
    weatherCity: WeatherCity;
    fetchStatusWeatherCity: FetchStatusType;
};
