import * as React from 'react';
import { mockedStoreKyiv } from '../mockedStoreKyiv.data';
import { shallow } from 'enzyme';
import TimeWeatherInfoTab from '../../src/app/city-weather/TimeWeatherInfoTab/TimeWeatherInfoTab';

describe('++++ <TimeWeatherInfoTab /> ++++', () => {
    mockedStoreKyiv.weather.weatherCity[0].timeDayWeather.forEach((timeWeather) => {
        const wrapper = shallow(<TimeWeatherInfoTab {{ timeWeather }} />);

        it('Renders correctly with different props', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});