import * as React from 'react';
import CityForm from '../CityForm/CityForm';
import * as styles from './Header.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <CityForm />
        </header>
    );
};

export default Header;
