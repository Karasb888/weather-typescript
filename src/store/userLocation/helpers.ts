import { GeoIpApiResponseType, LocationInfo } from "./types";

export const convertGeoIpResponse = (data: GeoIpApiResponseType) => {
    const convertedData: LocationInfo = {
        ip: data.ip,
        city: data.city,
        country: data.country_name
    };

    return convertedData;
};