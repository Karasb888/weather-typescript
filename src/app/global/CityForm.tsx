import * as React from 'react';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

interface StateProps {
    router: RouteComponentProps
};

interface State {
    cityQuery: string,
    redirect: boolean
};

const mapStateToProps = (state: StateProps) => {
    return {
        router: state.router
    };
};

class ContactForm extends React.Component<StateProps, State> {
    constructor(props: StateProps) {
        super(props);

        this.state = {
            redirect: false,
            cityQuery: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e: React.FormEvent):void {
        e.preventDefault();
        this.setState({ redirect: true });
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>):void {
        const value = e.target.value;
        this.setState({
            cityQuery: value
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={`/city/${this.state.cityQuery}`} />
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" placeholder="Type city name..." />
                    <button type="submit">Find</button>
                </form>
            );
        }
    }
};

export default connect(mapStateToProps, null)(ContactForm);
