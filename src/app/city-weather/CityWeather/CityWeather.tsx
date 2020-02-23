import * as React from 'react';
import {  ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { Action  } from 'redux';
import { setCityWeatherInfo, WeatherActionTypes, WeatherCity, FetchStatusType, City } from '../../../store/weather';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ApplicationState } from '../../../store';
import SmallWeatherDayCard from '../SmallWeatherDayCard/SmallWeatherDayCard';
import * as styles from './CityWeather.scss';
import { WindMillLoading } from 'react-loadingg';
import Error from '../../global/Error/Error';
import StarIcon from '../../icons/StarIcon';
import { FavoriteCityObj, setFavoriteCity, removeFavoriteCity, FavoritesCityActionTypes } from '../../../store/favoritesCity';
import RemoveIcon from '../../icons/RemoveIcon';

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
                    <div className={styles.cityWeatherContainer}>
                        <div className={styles.cityTitle}>
                            Week weather forecast for {this.props.city.name}
                            <span onClick={this.handleFavoriteCity}>
                                {
                                    this.cityInFavotiteList() === undefined
                                    ? <StarIcon
                                            svgClass={styles.favoriteIcon}
                                            title="Add to favorite cities list"
                                            width="25"
                                            height="25"
                                            viewBox="0 -10 511.98685 511"
                                        />
                                    : <RemoveIcon
                                            svgClass={styles.favoriteIcon}
                                            title="Remove from favorite cities list"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 512 512"
                                        />
                                }
                            </span>
                        </div>
                        <div className={styles.cityWeather}>
                            { this.props.weatherCity.map((dayWeatherObj) => {
                                return (
                                    <SmallWeatherDayCard key={dayWeatherObj.dayTimestamp} weather={dayWeatherObj} />
                                );
                            }) }
                        </div>
                    </div>
                );
            case('error'):
                return (
                    <Error errorText={`Cant find weather forecast for ${this.state.cityName}`} />
                );
            default:
                return (
                    <WindMillLoading />
                );
        }
    }
};

export const ConnectedCityWeather = connect(mapStateToProps, mapDispatchToProps)(CityWeather);
export default withRouter(ConnectedCityWeather);
