import * as React from 'react';
import * as funGif from './../../../img/fun_gif.gif';
import * as styles from './Home.scss';

const Home: React.FC = () => {
    return (
        <div className={styles.home}>
            <img className={styles.sun} src={funGif} alt="Fun sun gif animation"/>
        </div>
    );
};

export default Home;
