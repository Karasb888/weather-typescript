import { GeoIpApiResponseType, LocationInfo } from "./types";

export const convertGeoIpResponse = (data: GeoIpApiResponseType) => {
    const convertedData: LocationInfo = {
        ip: data.query,
        city: data.city,
        country: data.country
    };

    return convertedData;
};