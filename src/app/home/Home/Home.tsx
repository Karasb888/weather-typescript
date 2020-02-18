import * as React from 'react';
import * as fun_gif from './../../../img/fun_gif.gif';
import * as styles from './Home.scss';

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <img className={styles.sun} src={fun_gif} alt="Fun sun gif animation"/>
        </div>
    );
};

export default Home;
