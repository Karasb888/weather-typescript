import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Action  } from 'redux';
import { WeatherCity, setCityAndDateWeatherInfo, WeatherActionTypes } from '../../../store/weather';

type Date = string;
type CityName = string;
type CityNameParam = { cityName: CityName };
type DateParam = { date: Date };
type MyThunkDispatch = ThunkDispatch<{}, void, Action<WeatherActionTypes>>;

interface Props extends RouteComponentProps<CityNameParam & DateParam> {
    weather: {
        weatherCity: WeatherCity
    },
    setCityAndDateWeatherInfo: (date: Date, city: CityName) => void
};

interface State {
    cityName: CityName,
    date: Date
};

const mapStateToProps = (state: Props) => {
    return {
        weather: state.weather
    };
};

const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
    return {
        setCityAndDateWeatherInfo: (date: Date, city: CityName) => { dispatch(setCityAndDateWeatherInfo(date, city)) }
    };
};

class DayWeather extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            cityName: null,
            date: null
        };
    }

    componentDidMount() {
        this.handleDateWeatherRoute();
    }

    componentDidUpdate() {
        this.handleDateWeatherRoute();
    }

    handleDateWeatherRoute() {
        const { date, cityName } = this.props.match.params;
        const oldDate = this.state.date;
        const oldCityName = this.state.cityName;

        if (oldCityName !== cityName || oldDate !== date) {
            this.setState({ cityName, date });
            this.props.setCityAndDateWeatherInfo(date, cityName);
        }
    }

    render() {
        return (
            <div>Day card component</div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DayWeather);