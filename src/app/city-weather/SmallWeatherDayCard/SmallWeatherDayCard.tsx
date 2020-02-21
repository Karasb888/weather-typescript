import * as React from 'react';
import { NewWeatherDayObj, WeatherListObj } from './../../../store/weather';
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

        const { timeDayWeather } = this.props.weather;
        const minTime = timeDayWeather.reduce(
            (min: number, character: WeatherListObj) => (character.dt < min ? character.dt : min),
            timeDayWeather[0].dt
        );
        this.state = {
            activeTab: minTime
        };
    }

    private changeActiveTab(event: React.MouseEvent<HTMLDivElement>, id: number): void {
        if (id !== this.state.activeTab) {
            this.setState({ activeTab: id });
        }
    }

    public render() {
        const activeTabWeather = this.props.weather.timeDayWeather.find((timeWeatherInfo) => {
            return timeWeatherInfo.dt === this.state.activeTab;
        });
        const date = new Date(this.props.weather.dayTimestamp);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleString('en-US', options);

        return (
            <div className={styles.smallWeatherDayCard}>
                <div className={styles.date}>{formattedDate}</div>
                <div className={styles.buttonsContainer}>
                    {
                        this.props.weather.timeDayWeather.map((timeWeatherInfo) => {
                        const date = new Date(timeWeatherInfo.dt * 1000);
                        const hours = date.getHours();
                        return <div
                                data-time={timeWeatherInfo.dt}
                                className={[
                                    styles.tabButton,
                                    timeWeatherInfo.dt === this.state.activeTab
                                    ? styles.activeTabButton
                                    : ''
                                ].join(' ')} 
                                onClick={(e) => { this.changeActiveTab(e, timeWeatherInfo.dt) }}
                                key={timeWeatherInfo.dt}
                                >{hours}-00</div>
                        })
                    }
                </div>
                <div className={styles.tabs}>
                    <TimeWeatherInfoTab timeWeather={activeTabWeather} />
                </div>
            </div>
        );
    }
};

export default SmallWeatherDayCard;
