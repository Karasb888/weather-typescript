import * as React from 'react';
import { mockedStoreKyiv } from '../mockedData/mockedStoreKyiv.data';
import SmallWeatherDayCard from '../../src/app/city-weather/SmallWeatherDayCard/SmallWeatherDayCard';
import { shallow } from 'enzyme';

const props = {
    weather: mockedStoreKyiv.weather.weatherCity[0]
};;

describe('++++ <SmallWeatherDayCard /> ++++', () => {
    it('Renders correctly', () => {
        const wrapper = shallow(<SmallWeatherDayCard {...props} />);
        expect(wrapper).toMatchSnapshot();
    })
});