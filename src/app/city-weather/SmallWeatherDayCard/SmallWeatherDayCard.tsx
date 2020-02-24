import * as React from 'react';
import { NewWeatherDayObj, WeatherListObj } from './../../../store/weather';
import * as styles from './SmallWeatherDayCard.scss';
import TimeWeatherInfoTab from '../TimeWeatherInfoTab/TimeWeatherInfoTab';
import { Card, Box, Typography, Grid, Button, CardContent } from '@material-ui/core';

interface Props {
    weather: NewWeatherDayObj;
};

interface State {
    activeTab: number;
    formattedDate: string;
}

class SmallWeatherDayCard extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const { timeDayWeather } = this.props.weather;
        const minTime = timeDayWeather.reduce(
            (min: number, character: WeatherListObj) => (character.dt < min ? character.dt : min),
            timeDayWeather[0].dt
        );

        const date = new Date(this.props.weather.dayTimestamp);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleString('en-US', options);

        this.state = {
            formattedDate,
            activeTab: minTime
        };
    }

    private changeActiveTab(id: number): void {
        this.setState({ activeTab: id });
    }

    public render() {
        return (
            <React.Fragment>
                <Card>
                    <CardContent>
                        <Typography variant="subtitle1">{this.state.formattedDate}</Typography>
                        <Grid classes={{root: styles.buttonsGroup}}>
                            {
                                this.props.weather.timeDayWeather.map((timeWeatherInfo) => {
                                const date = new Date(timeWeatherInfo.dt * 1000);
                                const hours = date.getHours();
                                    return <Button
                                                size="small"
                                                color={this.state.activeTab === timeWeatherInfo.dt ? 'secondary' : 'primary'}
                                                variant="contained"
                                                classes={{root: styles.button}}
                                                key={timeWeatherInfo.dt}
                                                onClick={() => { this.changeActiveTab(timeWeatherInfo.dt) }}
                                >{hours}-00</Button>
                                })
                            }
                        </Grid>
                        {
                            this.props.weather.timeDayWeather.map((timeWeatherInfo) => {
                                return (
                                    <Box key={timeWeatherInfo.dt} hidden={this.state.activeTab !== timeWeatherInfo.dt}>
                                        <TimeWeatherInfoTab timeWeather={timeWeatherInfo} />
                                    </Box>
                                )
                            })
                        }
                    </CardContent>
                </Card>
            </React.Fragment>
        );
    }
};

export default SmallWeatherDayCard;
