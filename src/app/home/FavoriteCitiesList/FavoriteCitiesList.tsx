import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import { FavoriteCityObj, removeFavoriteCity } from '../../../store/favoritesCity';
import * as styles from './FavoriteCitiesList.scss';
import RemoveIcon from '../../icons/RemoveIcon';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { History } from 'history';
import { FavoritesCityActionTypes } from '../../../store/favoritesCity';
import { withRouter } from 'react-router-dom';

interface Props {
    citiesList: Array<FavoriteCityObj>;
    history: History;
    removeFavoriteCity: (id: number) => void;
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        citiesList: state.favoriteCities.citiesList
    };
};

type MyThunkDispatch = ThunkDispatch<{}, void, Action<FavoritesCityActionTypes>>;
const mapDispatchToProps = (dispatch: MyThunkDispatch ) => {
    return {
        removeFavoriteCity: (cityId: number) => { dispatch(removeFavoriteCity(cityId)) }
    };
};

const FavoriteCitiesList: React.FC<Props> = ({ citiesList, removeFavoriteCity, history }) => {
    return (
        <div className={styles.citiesList}>
            {
                citiesList.map((city: FavoriteCityObj) => {
                    return (
                            <div 
                                className={styles.citiesListItem}
                                key={city.id}
                                onClick={() => { history.push(`/city/${city.name}`) }}
                            >
                                { city.name }
                                <span onClick={() => { removeFavoriteCity(city.id) }}>
                                    <RemoveIcon
                                        svgClass={styles.removeIcon}
                                        title="Remove from favorite cities list"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 512 512"
                                    />
                                </span>
                            </div>
                        )
                })
            }
        </div>
    );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoriteCitiesList));
