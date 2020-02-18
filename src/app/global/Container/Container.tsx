import * as React from 'react';
import * as styles from './Container.scss';

const Container: React.FC = ({ children }) => {
    return (
        <div className={styles.container}>
            { children }
        </div>
    );
};

export default Container;
