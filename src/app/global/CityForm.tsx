import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

interface Props {
    router: RouteComponentProps,
    history: History
};

interface State {
    cityQuery: string
};

const mapStateToProps = (state: Props) => {
    return {
        router: state.router
    };
};

class ContactForm extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            cityQuery: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e: React.FormEvent):void {
        e.preventDefault();
        const { cityQuery } = this.state;
        this.props.history.push(`/city/${cityQuery}`);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>):void {
        const value = e.target.value;
        this.setState({
            cityQuery: value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" placeholder="Type city name..." />
                <button type="submit">Find</button>
            </form>
        );
    }
};

export default withRouter(connect(mapStateToProps, null)(ContactForm));
