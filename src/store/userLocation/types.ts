export interface GeoIpApiResponseType {
    ip_address: string;
    country: string;
    country_code: string;
    continent: string;
    continent_code: string;
    city: string;
    county: string;
    region: string;
    region_code: string;
    timezone: string;
    longitude: number;
    latitude: number;
    currency: string;
    languages: Array<string>;
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