import * as React from 'react';
import * as styles from './Loader.scss';

type LoaderSize = 'small' | 'large';

interface Props {
    loaderSize: LoaderSize;
}

const Loader: React.FC<Props> = ({ loaderSize }) => {
    const size = styles[loaderSize];

    return (
        <div className={[styles.ldsRoller, size].join(' ')}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Loader;
