import * as React from 'react';
import {  ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Action  } from 'redux';
import { setCityWeatherInfo, WeatherActionTypes, WeatherCity, FetchStatusType, City } from '../../../store/weather';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ApplicationState } from '../../../store';
import Loader from '../../global/Loader/Loader';
import SmallWeatherDayCard from '../SmallWeatherDayCard/SmallWeatherDayCard';
import * as styles from './CityWeather.scss';
import Error from '../../global/Error/Error';
import StarIcon from '@material-ui/icons/Star';
import { FavoriteCityObj, setFavoriteCity, removeFavoriteCity, FavoritesCityActionTypes } from '../../../store/favoritesCity';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Button, Grid, Typography } from '@material-ui/core';

interface State {
    cityName: string | null;
};

export interface Props extends RouteComponentProps<{ cityName: string }> {
    setCityWeatherInfo: (query: string) => Promise<void>;
    setFavoriteCity: (favoriteCityObj: FavoriteCityObj) => void;
    removeFavoriteCity: (cityId: number) => void;
    city: City;
    citiesList: Array<FavoriteCityObj>;
    weatherCity: WeatherCity;
    fetchStatusWeatherCity: FetchStatusType;
};

type MyThunkDispatch = ThunkDispatch<{}, void, Action<WeatherActionTypes & FavoritesCityActionTypes>>;
const mapStateToProps = (state: ApplicationState) => {
    return {
        city: state.weather.city,
        weatherCity: state.weather.weatherCity,
        citiesList: state.favoriteCities.citiesList,
        fetchStatusWeatherCity: state.weather.fetchStatusWeatherCity
    }
};
const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
    return {
        setCityWeatherInfo: (query: string) => { dispatch(setCityWeatherInfo(query)) },
        setFavoriteCity: (favoriteCityObj: FavoriteCityObj) => { dispatch(setFavoriteCity(favoriteCityObj)) },
        removeFavoriteCity: (cityId: number) => { dispatch(removeFavoriteCity(cityId)) }
    };
};

export class CityWeather extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            cityName: null
        };

        this.handleFavoriteCity = this.handleFavoriteCity.bind(this);
    }

    public componentDidMount() {
        this.handleCityRoute();
    }

    public componentDidUpdate() {
        this.handleCityRoute();
    }

    private handleFavoriteCity(): void {
        const cityListItem = this.cityInFavotiteList();
        if (cityListItem === undefined) {
            this.props.setFavoriteCity({ id: this.props.city.id, name: this.props.city.name });
        } else {
            this.props.removeFavoriteCity(this.props.city.id);
        }
    }

    private cityInFavotiteList(): FavoriteCityObj | undefined {
        const { id } = this.props.city;
        return this.props.citiesList.find((city: FavoriteCityObj) => {
            return city.id === id;
        });
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
                    <React.Fragment>
                        <div className={styles.heading}>
                            <Typography variant="h4">Weather forecast for - {this.props.city.name}</Typography>
                            <Button component="a" onClick={this.handleFavoriteCity}>
                                {
                                    this.cityInFavotiteList() !== undefined
                                    ? <StarIcon titleAccess="Remove from favorite cities list" />
                                    : <StarBorderIcon titleAccess="Add to favorite cities list"/>
                                }
                            </Button>
                        </div>
                        <div>
                            <Grid container spacing={6}>
                                { this.props.weatherCity.map((dayWeatherObj) => {
                                    return (
                                        <Grid key={dayWeatherObj.dayTimestamp} item xs={6}>
                                            <SmallWeatherDayCard weather={dayWeatherObj} />
                                        </Grid>
                                    );
                                }) }
                            </Grid>
                        </div>
                    </React.Fragment>
                );
            case('error'):
                return (
                    <Error errorSize="large" errorText={`Cant find weather forecast for ${this.state.cityName}`} />
                );
            default:
                return (
                    <div className={styles.loaderContainer}>
                        <Loader loaderSize="large" />
                    </div>
                );
        }
    }
};

export const ConnectedCityWeather = connect(mapStateToProps, mapDispatchToProps)(CityWeather);
export default withRouter(ConnectedCityWeather);
