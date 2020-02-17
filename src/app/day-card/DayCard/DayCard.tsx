import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Action  } from 'redux';
import { WeatherCity, setCityAndDateWeatherInfo, WeatherActionTypes } from '../../../store/weather';

type Date = string;
type CityName = string;

interface Props {
    weather: {
        weatherCity: WeatherCity
    },
    setCityAndDateWeatherInfo: (date: Date, city: CityName) => void
};

type CityNameParam = { cityName: CityName };
type DateParam = { date: Date };

type MyThunkDispatch = ThunkDispatch<{}, void, Action<WeatherActionTypes>>;


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

class DayCard extends React.Component<Props & RouteComponentProps<CityNameParam & DateParam>, null> {

    componentDidMount() {
        const { date, cityName } = this.props.match.params;

        this.props.setCityAndDateWeatherInfo(date, cityName);
    }

    render() {
        return (
            <div>Day card component</div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DayCard);