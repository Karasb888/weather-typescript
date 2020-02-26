import { Dispatch } from "redux"
import axios from "axios";
import { geoIpApiEndPoint } from "../../constants/apiInfo";
import { UserLocationActionTypes, LocationInfo } from "./types";
import { convertGeoIpResponse } from "./helpers";

export const setUserLocationInfo = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: UserLocationActionTypes.SET_FETCH_STATUS_USER_LOCATION, payload: 'pending' });
        return axios.get(geoIpApiEndPoint)
            .then((response) => {
                const data: LocationInfo = convertGeoIpResponse(response.data);
                dispatch({ type: UserLocationActionTypes.SET_USER_LOCATION_INFO, payload: { ...data } });
                dispatch({ type: UserLocationActionTypes.SET_FETCH_STATUS_USER_LOCATION, payload: 'success' });
            })
            .catch(() => {
                dispatch({ type: UserLocationActionTypes.SET_FETCH_STATUS_USER_LOCATION, payload: 'error' });
            });
    };
};