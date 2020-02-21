import * as React from 'react';
import ErrorIcon from '../../icons/ErrorIcon';
import * as styles from './Error.scss';

interface Props {
    errorText: string;
};

const Error: React.FC<Props> = ({ errorText }) => {
    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>
                <ErrorIcon
                    width="70"
                    height="70"
                    viewBox="0 0 512 512"
                    svgClass="error-icon"
                />
            </div>
            <div className={styles.errorText}>
                {errorText}
            </div>
        </div>
    );
};

export default Error;
