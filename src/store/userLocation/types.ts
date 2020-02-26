export interface GeoIpApiResponseType {
    ip: string;
    isp: string;
    org: string;
    hostname: string;
    latitude: number;
    longitude: number;
    postal_code: number;
    city: string;
    country_code: string;
    country_name: string;
    continent_code: string;
    continent_name: string;
    region: string;
    district: string;
    timezone_name: string;
    connection_type: string;
    asn_number: number;
    asn_org: string;
    asn: string;
    currency_code: string;
    currency_name: string;
    success: boolean;
    premium: boolean;
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