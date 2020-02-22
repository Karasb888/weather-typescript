import { WeatherState } from "../src/store/weather";

type MockStore = {
    weather: WeatherState
};

export const mockedStore: MockStore = {
    weather: {
        city: {
            id: 703448,
            name: 'Kyiv',
            coord: {
                lat: 50.4333,
                lon: 30.5167
            },
            country: 'UA',
            population: 2514227,
            timezone: 7200,
            sunrise: 1582347462,
            sunset: 1582385140
        },
        weatherCity: [{
                date: '2020-2-22',
                dayTimestamp: 1582322400000,
                timeDayWeather: [{
                        dt: 1582372800,
                        main: {
                            temp: 8.8,
                            feels_like: 4.86,
                            temp_min: 5.94,
                            temp_max: 8.8,
                            pressure: 1026,
                            sea_level: 1026,
                            grnd_level: 1010,
                            humidity: 58,
                            temp_kf: 2.86
                        },
                        weather: [{
                            id: 803,
                            main: 'Clouds',
                            description: 'broken clouds',
                            icon: '04d'
                        }],
                        clouds: {
                            all: 53
                        },
                        wind: {
                            speed: 3,
                            deg: 217
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-22 12:00:00'
                    },
                    {
                        dt: 1582383600,
                        main: {
                            temp: 7.24,
                            feels_like: 2.49,
                            temp_min: 5.1,
                            temp_max: 7.24,
                            pressure: 1024,
                            sea_level: 1024,
                            grnd_level: 1007,
                            humidity: 62,
                            temp_kf: 2.14
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04d'
                        }],
                        clouds: {
                            all: 99
                        },
                        wind: {
                            speed: 4.05,
                            deg: 224
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-22 15:00:00'
                    },
                    {
                        dt: 1582394400,
                        main: {
                            temp: 5.26,
                            feels_like: 0.2,
                            temp_min: 3.83,
                            temp_max: 5.26,
                            pressure: 1023,
                            sea_level: 1023,
                            grnd_level: 1007,
                            humidity: 67,
                            temp_kf: 1.43
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04n'
                        }],
                        clouds: {
                            all: 97
                        },
                        wind: {
                            speed: 4.32,
                            deg: 201
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-22 18:00:00'
                    },
                    {
                        dt: 1582405200,
                        main: {
                            temp: 4.22,
                            feels_like: -1.76,
                            temp_min: 3.51,
                            temp_max: 4.22,
                            pressure: 1021,
                            sea_level: 1021,
                            grnd_level: 1004,
                            humidity: 68,
                            temp_kf: 0.71
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 5.48,
                            deg: 212
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-22 21:00:00'
                    }
                ]
            },
            {
                date: '2020-2-23',
                dayTimestamp: 1582408800000,
                timeDayWeather: [{
                        dt: 1582416000,
                        main: {
                            temp: 3.68,
                            feels_like: -3.34,
                            temp_min: 3.68,
                            temp_max: 3.68,
                            pressure: 1018,
                            sea_level: 1018,
                            grnd_level: 1001,
                            humidity: 67,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 6.83,
                            deg: 214
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-23 00:00:00'
                    },
                    {
                        dt: 1582426800,
                        main: {
                            temp: 3.62,
                            feels_like: -3.48,
                            temp_min: 3.62,
                            temp_max: 3.62,
                            pressure: 1014,
                            sea_level: 1014,
                            grnd_level: 997,
                            humidity: 73,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 7.15,
                            deg: 242
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-23 03:00:00'
                    },
                    {
                        dt: 1582437600,
                        main: {
                            temp: 4.26,
                            feels_like: -2.55,
                            temp_min: 4.26,
                            temp_max: 4.26,
                            pressure: 1012,
                            sea_level: 1012,
                            grnd_level: 996,
                            humidity: 81,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 7.17,
                            deg: 248
                        },
                        rain: {
                            '3h': 1.56
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-23 06:00:00'
                    },
                    {
                        dt: 1582448400,
                        main: {
                            temp: 5.81,
                            feels_like: -0.72,
                            temp_min: 5.81,
                            temp_max: 5.81,
                            pressure: 1010,
                            sea_level: 1010,
                            grnd_level: 993,
                            humidity: 75,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 6.88,
                            deg: 258
                        },
                        rain: {
                            '3h': 0.25
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-23 09:00:00'
                    },
                    {
                        dt: 1582459200,
                        main: {
                            temp: 6.58,
                            feels_like: -0.81,
                            temp_min: 6.58,
                            temp_max: 6.58,
                            pressure: 1009,
                            sea_level: 1009,
                            grnd_level: 993,
                            humidity: 62,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 7.69,
                            deg: 270
                        },
                        rain: {
                            '3h': 0.88
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-23 12:00:00'
                    },
                    {
                        dt: 1582470000,
                        main: {
                            temp: 6.27,
                            feels_like: 0.63,
                            temp_min: 6.27,
                            temp_max: 6.27,
                            pressure: 1008,
                            sea_level: 1008,
                            grnd_level: 991,
                            humidity: 53,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d'
                        }],
                        clouds: {
                            all: 99
                        },
                        wind: {
                            speed: 4.72,
                            deg: 286
                        },
                        rain: {
                            '3h': 0.31
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-23 15:00:00'
                    },
                    {
                        dt: 1582480800,
                        main: {
                            temp: 5.27,
                            feels_like: 0.03,
                            temp_min: 5.27,
                            temp_max: 5.27,
                            pressure: 1008,
                            sea_level: 1008,
                            grnd_level: 991,
                            humidity: 63,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04n'
                        }],
                        clouds: {
                            all: 99
                        },
                        wind: {
                            speed: 4.41,
                            deg: 247
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-23 18:00:00'
                    },
                    {
                        dt: 1582491600,
                        main: {
                            temp: 2.92,
                            feels_like: -0.62,
                            temp_min: 2.92,
                            temp_max: 2.92,
                            pressure: 1004,
                            sea_level: 1004,
                            grnd_level: 987,
                            humidity: 95,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 2.72,
                            deg: 225
                        },
                        rain: {
                            '3h': 0.13
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-23 21:00:00'
                    }
                ]
            },
            {
                date: '2020-2-24',
                dayTimestamp: 1582495200000,
                timeDayWeather: [{
                        dt: 1582502400,
                        main: {
                            temp: 3.69,
                            feels_like: 0.8,
                            temp_min: 3.69,
                            temp_max: 3.69,
                            pressure: 998,
                            sea_level: 998,
                            grnd_level: 982,
                            humidity: 96,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 2.01,
                            deg: 159
                        },
                        rain: {
                            '3h': 2.44
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-24 00:00:00'
                    },
                    {
                        dt: 1582513200,
                        main: {
                            temp: 4,
                            feels_like: 0.02,
                            temp_min: 4,
                            temp_max: 4,
                            pressure: 990,
                            sea_level: 990,
                            grnd_level: 973,
                            humidity: 97,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 501,
                            main: 'Rain',
                            description: 'moderate rain',
                            icon: '10n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 3.68,
                            deg: 97
                        },
                        rain: {
                            '3h': 6
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-24 03:00:00'
                    },
                    {
                        dt: 1582524000,
                        main: {
                            temp: 0.46,
                            feels_like: -9.39,
                            temp_min: 0.46,
                            temp_max: 0.46,
                            pressure: 993,
                            sea_level: 993,
                            grnd_level: 978,
                            humidity: 96,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 601,
                            main: 'Snow',
                            description: 'snow',
                            icon: '13d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 11.22,
                            deg: 3
                        },
                        snow: {
                            '3h': 10.5
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-24 06:00:00'
                    },
                    {
                        dt: 1582534800,
                        main: {
                            temp: 2.98,
                            feels_like: -5.89,
                            temp_min: 2.98,
                            temp_max: 2.98,
                            pressure: 999,
                            sea_level: 999,
                            grnd_level: 983,
                            humidity: 68,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 600,
                            main: 'Snow',
                            description: 'light snow',
                            icon: '13d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 9.38,
                            deg: 336
                        },
                        snow: {
                            '3h': 0.56
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-24 09:00:00'
                    },
                    {
                        dt: 1582545600,
                        main: {
                            temp: 2.87,
                            feels_like: -5.62,
                            temp_min: 2.87,
                            temp_max: 2.87,
                            pressure: 1004,
                            sea_level: 1004,
                            grnd_level: 988,
                            humidity: 73,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 8.99,
                            deg: 327
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-24 12:00:00'
                    },
                    {
                        dt: 1582556400,
                        main: {
                            temp: 3.67,
                            feels_like: -3.71,
                            temp_min: 3.67,
                            temp_max: 3.67,
                            pressure: 1007,
                            sea_level: 1007,
                            grnd_level: 991,
                            humidity: 64,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04d'
                        }],
                        clouds: {
                            all: 99
                        },
                        wind: {
                            speed: 7.22,
                            deg: 329
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-24 15:00:00'
                    },
                    {
                        dt: 1582567200,
                        main: {
                            temp: 2.73,
                            feels_like: -4.1,
                            temp_min: 2.73,
                            temp_max: 2.73,
                            pressure: 1011,
                            sea_level: 1011,
                            grnd_level: 995,
                            humidity: 61,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 802,
                            main: 'Clouds',
                            description: 'scattered clouds',
                            icon: '03n'
                        }],
                        clouds: {
                            all: 50
                        },
                        wind: {
                            speed: 6.18,
                            deg: 319
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-24 18:00:00'
                    },
                    {
                        dt: 1582578000,
                        main: {
                            temp: 1.34,
                            feels_like: -4.29,
                            temp_min: 1.34,
                            temp_max: 1.34,
                            pressure: 1014,
                            sea_level: 1014,
                            grnd_level: 997,
                            humidity: 65,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01n'
                        }],
                        clouds: {
                            all: 0
                        },
                        wind: {
                            speed: 4.39,
                            deg: 307
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-24 21:00:00'
                    }
                ]
            },
            {
                date: '2020-2-25',
                dayTimestamp: 1582581600000,
                timeDayWeather: [{
                        dt: 1582588800,
                        main: {
                            temp: 0.41,
                            feels_like: -4.51,
                            temp_min: 0.41,
                            temp_max: 0.41,
                            pressure: 1015,
                            sea_level: 1015,
                            grnd_level: 998,
                            humidity: 82,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01n'
                        }],
                        clouds: {
                            all: 2
                        },
                        wind: {
                            speed: 3.74,
                            deg: 272
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-25 00:00:00'
                    },
                    {
                        dt: 1582599600,
                        main: {
                            temp: 0.17,
                            feels_like: -4.71,
                            temp_min: 0.17,
                            temp_max: 0.17,
                            pressure: 1014,
                            sea_level: 1014,
                            grnd_level: 997,
                            humidity: 86,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 800,
                            main: 'Clear',
                            description: 'clear sky',
                            icon: '01n'
                        }],
                        clouds: {
                            all: 0
                        },
                        wind: {
                            speed: 3.77,
                            deg: 247
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-25 03:00:00'
                    },
                    {
                        dt: 1582610400,
                        main: {
                            temp: 1.38,
                            feels_like: -4,
                            temp_min: 1.38,
                            temp_max: 1.38,
                            pressure: 1013,
                            sea_level: 1013,
                            grnd_level: 996,
                            humidity: 79,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 802,
                            main: 'Clouds',
                            description: 'scattered clouds',
                            icon: '03d'
                        }],
                        clouds: {
                            all: 50
                        },
                        wind: {
                            speed: 4.48,
                            deg: 219
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-25 06:00:00'
                    },
                    {
                        dt: 1582621200,
                        main: {
                            temp: 3.87,
                            feels_like: -2.83,
                            temp_min: 3.87,
                            temp_max: 3.87,
                            pressure: 1010,
                            sea_level: 1010,
                            grnd_level: 994,
                            humidity: 62,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 6.21,
                            deg: 223
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-25 09:00:00'
                    },
                    {
                        dt: 1582632000,
                        main: {
                            temp: 2.31,
                            feels_like: -3.85,
                            temp_min: 2.31,
                            temp_max: 2.31,
                            pressure: 1008,
                            sea_level: 1008,
                            grnd_level: 992,
                            humidity: 93,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 600,
                            main: 'Snow',
                            description: 'light snow',
                            icon: '13d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 6.24,
                            deg: 225
                        },
                        snow: {
                            '3h': 0.56
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-25 12:00:00'
                    },
                    {
                        dt: 1582642800,
                        main: {
                            temp: 3.89,
                            feels_like: -2.05,
                            temp_min: 3.89,
                            temp_max: 3.89,
                            pressure: 1006,
                            sea_level: 1006,
                            grnd_level: 990,
                            humidity: 74,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 5.58,
                            deg: 221
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-25 15:00:00'
                    },
                    {
                        dt: 1582653600,
                        main: {
                            temp: 5.15,
                            feels_like: -1.01,
                            temp_min: 5.15,
                            temp_max: 5.15,
                            pressure: 1005,
                            sea_level: 1005,
                            grnd_level: 989,
                            humidity: 63,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 5.7,
                            deg: 222
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-25 18:00:00'
                    },
                    {
                        dt: 1582664400,
                        main: {
                            temp: 5.35,
                            feels_like: 0.49,
                            temp_min: 5.35,
                            temp_max: 5.35,
                            pressure: 1004,
                            sea_level: 1004,
                            grnd_level: 988,
                            humidity: 67,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 4.05,
                            deg: 225
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-25 21:00:00'
                    }
                ]
            },
            {
                date: '2020-2-26',
                dayTimestamp: 1582668000000,
                timeDayWeather: [{
                        dt: 1582675200,
                        main: {
                            temp: 4.96,
                            feels_like: 0.41,
                            temp_min: 4.96,
                            temp_max: 4.96,
                            pressure: 1003,
                            sea_level: 1003,
                            grnd_level: 986,
                            humidity: 67,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 3.53,
                            deg: 215
                        },
                        rain: {
                            '3h': 0.19
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-26 00:00:00'
                    },
                    {
                        dt: 1582686000,
                        main: {
                            temp: 4.82,
                            feels_like: 1.04,
                            temp_min: 4.82,
                            temp_max: 4.82,
                            pressure: 1001,
                            sea_level: 1001,
                            grnd_level: 985,
                            humidity: 76,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 2.77,
                            deg: 240
                        },
                        rain: {
                            '3h': 0.19
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-26 03:00:00'
                    },
                    {
                        dt: 1582696800,
                        main: {
                            temp: 4.5,
                            feels_like: 0.51,
                            temp_min: 4.5,
                            temp_max: 4.5,
                            pressure: 1001,
                            sea_level: 1001,
                            grnd_level: 984,
                            humidity: 77,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 3.04,
                            deg: 209
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-26 06:00:00'
                    },
                    {
                        dt: 1582707600,
                        main: {
                            temp: 5.34,
                            feels_like: 1.69,
                            temp_min: 5.34,
                            temp_max: 5.34,
                            pressure: 1000,
                            sea_level: 1000,
                            grnd_level: 984,
                            humidity: 68,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 2.36,
                            deg: 185
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-26 09:00:00'
                    },
                    {
                        dt: 1582718400,
                        main: {
                            temp: 7.21,
                            feels_like: 3.62,
                            temp_min: 7.21,
                            temp_max: 7.21,
                            pressure: 999,
                            sea_level: 999,
                            grnd_level: 982,
                            humidity: 64,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 2.48,
                            deg: 153
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-26 12:00:00'
                    },
                    {
                        dt: 1582729200,
                        main: {
                            temp: 6.64,
                            feels_like: 4.18,
                            temp_min: 6.64,
                            temp_max: 6.64,
                            pressure: 998,
                            sea_level: 998,
                            grnd_level: 982,
                            humidity: 72,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 1.12,
                            deg: 113
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-26 15:00:00'
                    },
                    {
                        dt: 1582740000,
                        main: {
                            temp: 5.67,
                            feels_like: 2.94,
                            temp_min: 5.67,
                            temp_max: 5.67,
                            pressure: 998,
                            sea_level: 998,
                            grnd_level: 982,
                            humidity: 79,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 1.58,
                            deg: 113
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-26 18:00:00'
                    },
                    {
                        dt: 1582750800,
                        main: {
                            temp: 5.35,
                            feels_like: 2.92,
                            temp_min: 5.35,
                            temp_max: 5.35,
                            pressure: 998,
                            sea_level: 998,
                            grnd_level: 982,
                            humidity: 82,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 1.21,
                            deg: 45
                        },
                        rain: {
                            '3h': 0.13
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-26 21:00:00'
                    }
                ]
            },
            {
                date: '2020-2-27',
                dayTimestamp: 1582754400000,
                timeDayWeather: [{
                        dt: 1582761600,
                        main: {
                            temp: 4.88,
                            feels_like: 1.92,
                            temp_min: 4.88,
                            temp_max: 4.88,
                            pressure: 998,
                            sea_level: 998,
                            grnd_level: 982,
                            humidity: 86,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 804,
                            main: 'Clouds',
                            description: 'overcast clouds',
                            icon: '04n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 2.02,
                            deg: 48
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-27 00:00:00'
                    },
                    {
                        dt: 1582772400,
                        main: {
                            temp: 4.61,
                            feels_like: 1.04,
                            temp_min: 4.61,
                            temp_max: 4.61,
                            pressure: 997,
                            sea_level: 997,
                            grnd_level: 981,
                            humidity: 90,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10n'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 2.98,
                            deg: 61
                        },
                        rain: {
                            '3h': 0.31
                        },
                        sys: {
                            pod: 'n'
                        },
                        dt_txt: '2020-02-27 03:00:00'
                    },
                    {
                        dt: 1582783200,
                        main: {
                            temp: 4.47,
                            feels_like: 1.17,
                            temp_min: 4.47,
                            temp_max: 4.47,
                            pressure: 998,
                            sea_level: 998,
                            grnd_level: 982,
                            humidity: 95,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 2.76,
                            deg: 70
                        },
                        rain: {
                            '3h': 1.13
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-27 06:00:00'
                    },
                    {
                        dt: 1582794000,
                        main: {
                            temp: 4.72,
                            feels_like: 1.45,
                            temp_min: 4.72,
                            temp_max: 4.72,
                            pressure: 998,
                            sea_level: 998,
                            grnd_level: 982,
                            humidity: 95,
                            temp_kf: 0
                        },
                        weather: [{
                            id: 500,
                            main: 'Rain',
                            description: 'light rain',
                            icon: '10d'
                        }],
                        clouds: {
                            all: 100
                        },
                        wind: {
                            speed: 2.79,
                            deg: 89
                        },
                        rain: {
                            '3h': 2.44
                        },
                        sys: {
                            pod: 'd'
                        },
                        dt_txt: '2020-02-27 09:00:00'
                    }
                ]
            }
        ],
        fetchStatusWeatherCity: 'success'
    }
};