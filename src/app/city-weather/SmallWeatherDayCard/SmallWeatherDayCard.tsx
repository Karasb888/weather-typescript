import * as React from 'react';
import { NewWeatherDayObj } from './../../../store/weather';
import * as styles from './SmallWeatherDayCard.scss';
import TimeWeatherInfoTab from '../TimeWeatherInfoTab/TimeWeatherInfoTab';

interface Props {
    weather: NewWeatherDayObj;
};

interface State {
    activeTab: number;
}

class SmallWeatherDayCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            activeTab: 1
        };
    }

    public render() {
        return (
            <div className={styles.smallWeatherDayCard}>
                <div>
                    {
                        this.props.weather.timeDayWeather.map((timeWeatherInfo) => {
                        return <div key={timeWeatherInfo.dt}>{timeWeatherInfo}</div>
                        })
                    }
                </div>
                <div>
                    {
                        this.props.weather.timeDayWeather.map((timeWeatherInfo) => {
                            return <TimeWeatherInfoTab timeWeather={timeWeatherInfo} key={timeWeatherInfo.dt}/>
                        })
                    }
                </div>
            </div>
        );
    }
};

export default SmallWeatherDayCard;
