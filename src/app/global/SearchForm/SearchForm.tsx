import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import { Button, Grid, TextField } from '@material-ui/core';

interface Props {
    history: History;
};

interface State {
    cityQuery: string;
};

export class SearchForm extends React.Component<Props, State> {
    private input = React.createRef<HTMLInputElement>();

    constructor(props: Props) {
        super(props);

        this.state = {
            cityQuery: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    private handleSubmit(e: React.FormEvent): void {
        e.preventDefault();
        const { cityQuery } = this.state;
        if (cityQuery) {
            this.input.current.value = '';
            this.props.history.push(`/city/${cityQuery}`);
        }
    }

    private handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        let value = e.target.value;
        value = value.trim();
        this.setState({
            cityQuery: value
        });
    }

    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid alignItems="center" container spacing={3}>
                    <Grid xs={9} item>
                        <TextField
                            label="Find weather forecast"
                            placeholder="Type city/country name...(e.g. London)"
                            onChange={this.handleChange}
                            fullWidth
                            inputRef={this.input}
                        />
                    </Grid>
                    <Grid xs={3} item>
                        <Button variant="outlined" color="secondary">
                            Find
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
};

export default withRouter(connect(null, null)(SearchForm));
