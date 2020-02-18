import * as React from 'react';
import {  ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Action  } from 'redux';
import { setCityWeatherInfo, WeatherActionTypes } from '../../../store/weather';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type CityNameParam = { cityName: string };

interface Props extends RouteComponentProps<CityNameParam> {
    setCityWeatherInfo: Function
};

interface State {
    cityName: string | null
};

type MyThunkDispatch = ThunkDispatch<{}, void, Action<WeatherActionTypes>>;

const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
    return {
        setCityWeatherInfo: (query: string) => { dispatch(setCityWeatherInfo(query)) }
    };
};

class City extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            cityName: null
        };
    }
    componentDidMount() {
        this.handleCityRoute();
    }

    componentDidUpdate() {
        this.handleCityRoute();
    }

    handleCityRoute() {
        const oldCityName = this.state.cityName;
        const cityName = this.props.match.params.cityName;
        if (oldCityName !== cityName) {
            this.setState({ cityName });
            this.props.setCityWeatherInfo(cityName);
        }
    }

    render() {
        return (
        <div>City card component========{ this.state.cityName }</div>
        );
    }
};

export default withRouter(connect(null, mapDispatchToProps)(City));