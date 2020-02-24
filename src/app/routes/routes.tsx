import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import CityWeather from '../city-weather/CityWeather/CityWeather';
import Error from '../global/Error/Error';

const Routes: React.FC = () => {
    return(
        <div>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => <div></div>}
                />
                <Route
                    exact path="/city/:cityName"
                    component={CityWeather}
                />
                <Route
                    component={() => <Error errorText="404 - Oh dear, this link isn't working." /> }
                />
            </Switch>
        </div>
    );
};

export default Routes;
