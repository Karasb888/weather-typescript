import * as React from 'react';
import { mockedStoreKyiv } from '../mockedStoreKyiv.data';
import { shallow } from 'enzyme';
import TimeWeatherInfoTab from '../../src/app/city-weather/TimeWeatherInfoTab/TimeWeatherInfoTab';

describe('++++ <TimeWeatherInfoTab /> ++++', () => {
    mockedStoreKyiv.weather.weatherCity[0].timeDayWeather.forEach((timeWeather) => {
        const props = { timeWeather };
        const wrapper = shallow(<TimeWeatherInfoTab {...props} />);

        it('Renders correctly with different props', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});