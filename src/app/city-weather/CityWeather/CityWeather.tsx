import * as React from 'react';
import {  ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Action  } from 'redux';
import { setCityWeatherInfo, WeatherActionTypes, WeatherCity, FetchStatusType } from '../../../store/weather';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ApplicationState } from '../../../store';
import SmallWeatherDayCard from '../SmallWeatherDayCard/SmallWeatherDayCard';
import * as styles from './CityWeather.scss';
import { WindMillLoading } from 'react-loadingg';
import Error from '../../global/Error/Error';

type CityNameParam = { cityName: string };

interface Props extends RouteComponentProps<CityNameParam> {
    setCityWeatherInfo: Function;
    weatherCity: WeatherCity;
    fetchStatusWeatherCity: FetchStatusType;
};

interface State {
    cityName: string | null;
};

type MyThunkDispatch = ThunkDispatch<{}, void, Action<WeatherActionTypes>>;

const mapStateToProps = (state: ApplicationState) => {
    return {
        weatherCity: state.weather.weatherCity,
        fetchStatusWeatherCity: state.weather.fetchStatusWeatherCity
    }
};

const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
    return {
        setCityWeatherInfo: (query: string) => { dispatch(setCityWeatherInfo(query)) }
    };
};

class CityWeather extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            cityName: null
        };
    }

    public componentDidMount() {
        this.handleCityRoute();
    }

    public componentDidUpdate() {
        this.handleCityRoute();
    }

    private handleCityRoute(): void {
        const oldCityName = this.state.cityName;
        const cityName = this.props.match.params.cityName;
        if (oldCityName !== cityName) {
            this.setState({ cityName });
            this.props.setCityWeatherInfo(cityName);
        }
    }

    public render() {
        switch(this.props.fetchStatusWeatherCity) {
            case('success'):
                return (
                    <div className={styles.cityWeatherContainer}>
                        <div className={styles.cityTitle}>Week weather forecast for {this.state.cityName}</div>
                        <div className={styles.cityWeather}>
                            { this.props.weatherCity && this.props.weatherCity.map((dayWeatherObj) => {
                                return (
                                    <SmallWeatherDayCard key={dayWeatherObj.dayTimestamp} weather={dayWeatherObj} />
                                );
                            }) }
                        </div>
                    </div>
                );
            case('error'):
                return (
                    <Error errorText={`Cant find weather forecast for ${this.props.match.params.cityName}`} />
                );
            default:
                return (
                    <WindMillLoading />
                );
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CityWeather));
