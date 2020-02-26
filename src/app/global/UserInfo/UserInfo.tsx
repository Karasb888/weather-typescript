import * as React from 'react';
import { UserLocationActionTypes, setUserLocationInfo, LocationInfo, FetchStatusType } from '../../../store/userLocation';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';

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
        switch(this.props.fetchStatusUserLocation) {
            case 'success':
                return (
                    <div>Have data</div>
                );
            case 'error':
                return (
                    <div>error</div>
                );
            default:
                return (
                    <div>loading</div>
                );
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
