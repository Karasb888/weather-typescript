export interface GeoIpApiResponseType {
    status: string;
    country: string;
    countryCode: string;
    region: string;
    regionName: string;
    city: string;
    zip: number;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
    query: string;
};

export type FetchStatusType = 'success' | 'pending' | 'error' | 'none';

export interface LocationInfo {
    ip: string;
    city: string;
    country: string;
};

export interface UserLocationState {
    locationInfo: LocationInfo | null;
    fetchStatusUserLocation: FetchStatusType;
};

export enum UserLocationActionTypes {
    SET_USER_LOCATION_INFO = 'SET_USER_LOCATION_INFO',
    SET_FETCH_STATUS_USER_LOCATION = 'SET_FETCH_STATUS_USER_LOCATION'
};