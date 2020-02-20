import * as React from 'react';
import * as styles from './Footer.scss';

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            Weather data provided by <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">https://openweathermap.org/</a>
        </div>
    );
};

export default Footer;