import * as React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import * as styles from './Header.scss';
import { History } from 'history';
import { withRouter } from 'react-router-dom';

interface Props {
    history: History
};

const Header: React.FC<Props> = ({ history }) => {
    return (
        <div className={styles.header}>
            <div className={styles.homeBtn} onClick={() => { history.push('/') }}>home</div>
            <SearchForm />
        </div>
    );
};

export default withRouter(Header);
