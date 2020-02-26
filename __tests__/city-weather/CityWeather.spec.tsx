import * as React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import WithRouteCityWeather from '../../src/app/city-weather/CityWeather/CityWeather';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store'
import { routerMiddleware } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { mockedStoreKyiv } from '../mockedData/mockedStoreKyiv.data';
import { FetchStatusType } from '../../src/store/weather';

let store: any;

const history = createMemoryHistory();
const initialState = {
    setCityWeatherInfo: jest.fn(),
    ...mockedStoreKyiv
};
const middlewares = [routerMiddleware(history), thunk]
const mockStore = configureStore(middlewares);

const path = `/city/:cityName`;

const fetchStatusVariations: Array<FetchStatusType> = ['none', 'success', 'pending', 'error'];

describe('++++ <CityWeather /> ++++', () => {
    fetchStatusVariations.forEach((fetchStatus) => {
        it(`Renders correctly - fetch status: ${fetchStatus}`, () => {
            initialState.weather.fetchStatusWeatherCity = fetchStatus;
            store = mockStore(initialState);
            const component = mount(
                <Provider store={store}>
                    <MemoryRouter initialEntries={['/city/Kyiv']} keyLength={0}>
                        <Route exact component={WithRouteCityWeather} path={path} />
                    </MemoryRouter>
                </Provider>
            ).find(WithRouteCityWeather);
            expect(component).toMatchSnapshot();
        });
    });
});