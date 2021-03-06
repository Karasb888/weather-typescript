import { GeoIpApiResponseType } from "../../src/store/userLocation"

const geoIpApiResponse: GeoIpApiResponseType = {
    "ip_address": "8.8.8.8",
    "country": "United States",
    "country_code": "US",
    "continent": "North America",
    "continent_code": "NA",
    "city": "Mountain View",
    "county": "Santa Clara County",
    "region": "California",
    "region_code": "CA",
    "timezone": "America/Los_Angeles",
    "longitude": -122.0838,
    "latitude": 37.386,
    "currency": "USD",
    "languages": [
        "en-US",
        "es-US",
        "haw",
        "fr"
    ]
};

export default geoIpApiResponse;
