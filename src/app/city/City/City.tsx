import * as React from 'react';
import {  ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Action  } from 'redux';
import { setCityWeatherInfo } from '../../../store/weather';
import { RouteComponentProps } from 'react-router-dom';

interface StateProps {
    setCityWeatherInfo: Function
};

type CityNameParam = { cityName: string };

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;

const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
    return {
        setCityWeatherInfo: (query: string) => { dispatch(setCityWeatherInfo(query)) }
    };
};

class City extends React.Component<StateProps & RouteComponentProps<CityNameParam>, null> {

    componentDidMount() {
        const cityName = this.props.match.params.cityName;
        this.props.setCityWeatherInfo(cityName);
    }

    render() {
        return (
            <div>City card component</div>
        );
    }
};

export default connect(null, mapDispatchToProps)(City);