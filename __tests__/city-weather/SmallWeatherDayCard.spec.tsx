import * as React from 'react';
import { mockedStoreKyiv } from '../mockedStoreKyiv.data';
import SmallWeatherDayCard from '../../src/app/city-weather/SmallWeatherDayCard/SmallWeatherDayCard';
import { shallow } from 'enzyme';
import TimeWeatherInfoTab from '../../src/app/city-weather/TimeWeatherInfoTab/TimeWeatherInfoTab';

const props = {
    weather: mockedStoreKyiv.weather.weatherCity[0]
};;

describe('++++ <SmallWeatherDayCard /> ++++', () => {
    const wrapper = shallow(<SmallWeatherDayCard {...props} />);
    // @ts-ignore
    const changeActiveTab = jest.spyOn(SmallWeatherDayCard.prototype, 'changeActiveTab');
    props.weather.timeDayWeather.forEach((timeWeather, index) => {
        it('Renders correctly for different tabs', () => {
            wrapper.find(`[data-time=${timeWeather.dt}]`).simulate('click');
            wrapper.update();
            expect(wrapper.state('activeTab')).toEqual(timeWeather.dt);
            expect(changeActiveTab).toBeCalledTimes(index + 1);
            expect(wrapper.find(TimeWeatherInfoTab).props()).toEqual({timeWeather});
            expect(wrapper).toMatchSnapshot();
        });
    });
});