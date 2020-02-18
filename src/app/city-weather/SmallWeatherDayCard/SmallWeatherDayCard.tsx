import * as React from 'react';
import { NewWeatherDayObj } from './../../../store/weather';
import * as styles from './SmallWeatherDayCard.scss';

interface Props {
    weather: NewWeatherDayObj
};

const SmallWeatherDayCard: React.FC<Props> = ({ weather }) => {
    return (
        <div className={styles.smallWeatherDayCard}>
            { weather.timeDayWeather.map((timeWeatherInfo) => {
                return <div key={timeWeatherInfo.dt}>{timeWeatherInfo.dt_txt}</div>
            }) }
        </div>
    );
};

export default SmallWeatherDayCard;
