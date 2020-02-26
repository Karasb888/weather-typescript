import * as React from 'react';
import { UserLocationActionTypes, setUserLocationInfo, LocationInfo, FetchStatusType } from '../../../store/userLocation';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import { Typography, ListItem, List } from '@material-ui/core';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';
import { Link } from 'react-router-dom';

interface Props {
    setUserLocationInfo: () => void;
    locationInfo: LocationInfo | null;
    fetchStatusUserLocation: FetchStatusType;
};

type MyThunkDispatch = ThunkDispatch<{}, void, Action<UserLocationActionTypes>>;
const mapDispatchToProps = (dispatch: MyThunkDispatch) => {
    return {
        setUserLocationInfo: () => { dispatch(setUserLocationInfo()) }
    };
};

const mapStateToProps = (state: ApplicationState) => {
    return {
        locationInfo: state.userLocation.locationInfo,
        fetchStatusUserLocation: state.userLocation.fetchStatusUserLocation
    };
};

class UserInfo extends React.Component<Props, null> {
    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {
        this.props.setUserLocationInfo();
    }

    render() {
        let content;

        switch(this.props.fetchStatusUserLocation) {
            case 'success':
                content = <List>
                            <ListItem button dense component={Link} to={`/city/${this.props.locationInfo.city}`}>
                                <Typography variant="body2">Location: { `${this.props.locationInfo.city}, ${this.props.locationInfo.country}` }</Typography>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body2">{ this.props.locationInfo.ip }</Typography>
                            </ListItem>
                        </List>;
                break;
            case 'error':
                content =  <Error errorSize="small" errorText={`Can't detect your current location!`} />;
                break;
            default:
                content = <Loader loaderSize="small" />;
        };

        return (
            <div>
                <Typography color="primary" variant="body1">Your info:</Typography>
                <div>{ content }</div>
            </div>
        );
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
