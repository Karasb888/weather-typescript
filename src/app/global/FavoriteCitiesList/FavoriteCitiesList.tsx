import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import { FavoriteCityObj, removeFavoriteCity } from '../../../store/favoritesCity';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { FavoritesCityActionTypes } from '../../../store/favoritesCity';
import { Link } from 'react-router-dom';
import { List, IconButton, ListItem, ListItemText, ListItemSecondaryAction, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

interface Props {
    citiesList: Array<FavoriteCityObj>;
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

const FavoriteCitiesList: React.FC<Props> = ({ citiesList, removeFavoriteCity }) => {
    return (
        <List subheader={<Typography variant="body1" color="primary">Favorite places:</Typography>}>
            {
                !citiesList.length
                ? <ListItem><Typography variant="body2" color="error">No places in list</Typography></ListItem>
                : citiesList.map((city: FavoriteCityObj) => {
                    return (
                        <ListItem
                            button
                            dense
                            alignItems="center"
                            key={city.id}
                            component={Link}
                            to={`/city/${city.name}`}
                        >
                            <ListItemText primary={city.name} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon onClick={() => {removeFavoriteCity(city.id)}} />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                })
            }
        </List>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCitiesList);
