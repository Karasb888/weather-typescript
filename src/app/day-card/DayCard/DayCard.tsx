import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Action  } from 'redux';
import { WeatherObj, setCityAndDateWeatherInfo, setCityWeatherInfo } from '../../../store/weather';

interface StateProps {
    router: RouteComponentProps,
    weather: {
        weatherCity: WeatherObj
    },
    setCityWeatherInfo: Function,
    setCityAndDateWeatherInfo: Function
};

type CityNameParam = { cityName: string };
type DateParam = { date: string };

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;

const mapStateToProps = (state: StateProps) => {
    return {
        router: state.router,
        weather: state.weather
    };
};

const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
    return {
        setCityWeatherInfo: (query: string) => { dispatch(setCityWeatherInfo(query)) },
        setCityAndDateWeatherInfo: (date: number) => { dispatch(setCityAndDateWeatherInfo(date)) }
    };
};

class DayCard extends React.Component<StateProps & RouteComponentProps<CityNameParam & DateParam>, null> {

    componentDidMount() {
        const { cityName, date } = this.props.match.params;

        if (this.props.weather.weatherCity) {
            this.props.setCityAndDateWeatherInfo(date);
        } else {
            this.props.setCityWeatherInfo(cityName).then(() => {
                this.props.setCityAndDateWeatherInfo();
            });
        }
    }

    render() {
        return (
            <div>Day card component</div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DayCard);