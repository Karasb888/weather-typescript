import * as React from 'react';
import ErrorIcon from '../../icons/ErrorIcon';
import * as styles from './Error.scss';
import { Typography } from '@material-ui/core';

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
            <Typography variant="h4" color="error" align="center">{errorText}</Typography>
        </div>
    );
};

export default Error;
