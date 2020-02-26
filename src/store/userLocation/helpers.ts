import { GeoIpApiResponseType, LocationInfo } from "./types";

export const convertGeoIpResponse = (data: GeoIpApiResponseType) => {
    const convertedData: LocationInfo = {
        ip: data.ip_address,
        city: data.city,
        country: data.country
    };

    return convertedData;
};