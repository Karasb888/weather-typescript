import * as React from 'react';
import { WeatherListObj } from '../../../store/weather';
import TempIcon from '../../icons/TempIcon';
import TempFeelsIcon from '../../icons/TempFeelsIcon';
import CloudsIcon from '../../icons/CloudsIcon';
import WindIcon from '../../icons/WindIcon';
import * as styles from './TimeWeatherInfoTab.scss';

interface Props {
    timeWeather: WeatherListObj;
};

const TimeWeatherInfoTab: React.FC<Props> = ({ timeWeather }) => {
    const iconsProps = {
        height: '25',
        width: '25',
        svgClass: styles.icon
    };

    return (
        <div>
            <div className={styles.weatherOption}>
                <TempIcon
                    {...iconsProps}
                    viewBox="0 0 64 64"
                />
                <div className={styles.optionName}>Temperture:</div>
                <div className={styles.optionValue}>{timeWeather.main.temp}<span className={styles.celsius}>&#8451;</span></div>
            </div>
            <div className={styles.weatherOption}>
                <TempFeelsIcon
                    {...iconsProps}
                    viewBox="0 0 64 64"
                />
                <div className={styles.optionName}>Feels temperture:</div>
                <div className={styles.optionValue}>{timeWeather.main.feels_like}<span className={styles.celsius}>&#8451;</span></div>
            </div>
            <div className={styles.weatherOption}>
                <CloudsIcon
                    {...iconsProps}
                    viewBox="0 -87 463.83425 463"
                />
                <div className={styles.optionName}>Clouds:</div>
                <div className={styles.optionValue}>{timeWeather.clouds.all}%</div>
            </div>
            <div className={styles.weatherOption}>
                <WindIcon
                    {...iconsProps}
                    viewBox="0 0 512 512"
                />
                <div className={styles.optionName}>Wind:</div>
                <div className={styles.optionValue}>{timeWeather.wind.speed}m/s {timeWeather.wind.deg}deg</div>
            </div>
        </div>
    );
};

export default TimeWeatherInfoTab;
