import { Reducer } from 'redux'
import { UserLocationActionTypes, UserLocationState } from './types';

export const initialState: UserLocationState = {
    locationInfo: null,
    fetchStatusUserLocation: 'none'
};

const reducer: Reducer<UserLocationState> = (state = initialState, action) => {
    switch (action.type) {
    case UserLocationActionTypes.SET_USER_LOCATION_INFO: {
        return { ...state, locationInfo: action.payload };
    };
    case UserLocationActionTypes.SET_FETCH_STATUS_USER_LOCATION: {
        return { ...state, fetchStatusUserLocation: action.payload }
    };
    default: {
        return state
    }
    }
};

export { reducer as userLocationReducer };
