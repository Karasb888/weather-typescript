import * as React from 'react';
import * as styles from './Home.scss';
import FavoriteCitiesList from '../FavoriteCitiesList/FavoriteCitiesList';

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <FavoriteCitiesList />
        </div>
    );
};

export default Home;
