import * as React from 'react';
import { WeatherListObj } from '../../../store/weather';
import TempIcon from '../../icons/TempIcon';
import TempFeelsIcon from '../../icons/TempFeelsIcon';
import CloudsIcon from '../../icons/CloudsIcon';
import WindIcon from '../../icons/WindIcon';
import * as styles from './TimeWeatherInfoTab.scss';
import { List, ListItem, ListItemText } from '@material-ui/core';

interface Props {
    timeWeather: WeatherListObj;
};

const iconsProps = {
    height: '25',
    width: '25',
    svgClass: styles.icon
};

const TimeWeatherInfoTab: React.FC<Props> = ({ timeWeather }) => {
    return (
        <List>
            <ListItem alignItems="center">
                <TempIcon {...iconsProps} viewBox="0 0 64 64" />
                <ListItemText primary="Temperture: " secondary={`${timeWeather.main.temp}℃`}/>
            </ListItem>
            <ListItem alignItems="center">
                <TempFeelsIcon {...iconsProps} viewBox="0 0 64 64" />
                <ListItemText primary="Feels temperture: " secondary={`${timeWeather.main.feels_like}℃`}/>
            </ListItem>
            <ListItem alignItems="center">
                <CloudsIcon {...iconsProps} viewBox="0 -87 463.83425 463" />
                <ListItemText primary="Clouds: " secondary={`${timeWeather.clouds.all}%`}/>
            </ListItem>
            <ListItem alignItems="center">
                <WindIcon {...iconsProps} viewBox="0 0 512 512" />
                <ListItemText primary="Wind: " secondary={`${timeWeather.wind.speed}m/s ${timeWeather.wind.deg}deg`}/>
            </ListItem>
        </List>
    );
};

export default TimeWeatherInfoTab;
