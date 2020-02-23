import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { History } from 'history';
import * as styles from './SearchForm.scss';
import { ApplicationState } from '../../../store';

interface Props {
    history: History;
};

interface State {
    cityQuery: string;
};

// const mapStateToProps = (state: ApplicationState) => {
//     return {
//         // router: state.router
//     };
// };

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
                <input
                    onChange={this.handleChange}
                    className={styles.textfield}
                    ref={this.input}
                    type="text"
                    placeholder="City (e.g. London)"
                />
                <button className={styles.button} type="submit">Find</button>
            </form>
        );
    }
};

export default withRouter(connect(null, null)(SearchForm));
