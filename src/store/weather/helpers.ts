import { WeatherListObj, WeatherCity, City, NewWeatherDayObj, WeatherResponseObj } from "./types";

export function convertWeatherResponse(weatherResponse: WeatherResponseObj): { daysWeather: WeatherCity; city: City } {
    const newWeatherObj: { [key: string]: Array<WeatherListObj> } = {};
    const city: City = Object.assign({}, weatherResponse.city);

    weatherResponse.list.forEach((weatherItem: WeatherListObj) => {
        // convert weatherItem.dt to seconds
        const dateObj = new Date(weatherItem.dt * 1000);
        const month = dateObj.getUTCMonth() + 1; //months from 1-12
        const day = dateObj.getUTCDate();
        const year = dateObj.getUTCFullYear();
        const newdate: string = year + "-" + month + "-" + day;

        if (!newWeatherObj.hasOwnProperty(newdate)) {
            newWeatherObj[newdate] = [];
        }

        newWeatherObj[newdate].push(weatherItem);
    });

    const daysArray: WeatherCity = [];
    const daysObjectKeys = Object.keys(newWeatherObj);
    daysObjectKeys.forEach((key: string) => {
        const daysArrayItem: NewWeatherDayObj = {
            date: key,
            dayTimestamp: Date.parse(key),
            timeDayWeather: newWeatherObj[key]
        };
        daysArray.push(daysArrayItem);
    });

    return { daysWeather: daysArray, city  };
};
