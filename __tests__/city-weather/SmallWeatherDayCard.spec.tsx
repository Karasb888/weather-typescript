import * as React from 'react';
import { mockedStoreKyiv } from '../mockedStoreKyiv.data';
import configureStore from 'redux-mock-store'
import SmallWeatherDayCard from '../../src/app/city-weather/SmallWeatherDayCard/SmallWeatherDayCard';
import { shallow } from 'enzyme';
import TimeWeatherInfoTab from '../../src/app/city-weather/TimeWeatherInfoTab/TimeWeatherInfoTab';

const props = {
    weather: mockedStoreKyiv.weather.weatherCity[0]
};;

describe('++++ <SmallWeatherDayCard /> ++++', () => {
    const wrapper = shallow(<SmallWeatherDayCard {...props} />);
    props.weather.timeDayWeather.forEach((timeWeather) => {
        it('Renders correctly for different tabs', () => {
            wrapper.find(`[data-time=${timeWeather.dt}]`).simulate('click');
            expect(wrapper.state('activeTab')).toEqual(timeWeather.dt);
            expect(wrapper.find(TimeWeatherInfoTab).props()).toEqual({timeWeather});
            expect(wrapper).toMatchSnapshot();
        });
    });
});