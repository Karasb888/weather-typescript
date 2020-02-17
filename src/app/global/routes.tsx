import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import 'normalize.css';
import Home from '../home/Home/Home';
import City from '../city/City/City';
import DayCard from './../day-card/DayCard/DayCard';


const Routes: React.FC = () => {
    return(
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact path="/city/:cityName"
                    component={City}
                />
                <Route
                    path="/city/:cityName/:date"
                    component={DayCard}
                />
                <Route component={() => <div>404 - Not Found</div>} />
            </Switch>
        </main>
    );
};

export default Routes;