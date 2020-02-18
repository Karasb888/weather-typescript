import * as React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import * as styles from './Header.scss';

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <SearchForm />
        </div>
    );
};

export default Header;
