import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../home/Home/Home';
import CityWeather from '../city-weather/CityWeather/CityWeather';
import DayWeather from '../day-weather/DayWeather/DayWeather';


const Routes: React.FC = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact path="/city/:cityName"
                    component={CityWeather}
                />
                <Route
                    path="/city/:cityName/:date"
                    component={DayWeather}
                />
                <Route component={() => <div>404 - Not Found</div>} />
            </Switch>
        </div>
    );
};

export default Routes;
