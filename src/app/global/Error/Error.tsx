import * as React from 'react';
import ErrorIcon from '../../icons/ErrorIcon';
import * as styles from './Error.scss';
import { Typography } from '@material-ui/core';

type ErrorSize = 'small' | 'large';

export interface Props {
    errorText: string;
    errorSize: ErrorSize;
};

const Error: React.FC<Props> = ({ errorText, errorSize }) => {
    const iconSize = errorSize === 'small' ? '20' : '70';
    const fontSize = errorSize === 'small' ? 'body2' : 'h4';

    return (
        <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>
                <ErrorIcon
                    width={iconSize}
                    height={iconSize}
                    viewBox="0 0 512 512"
                    svgClass="error-icon"
                />
            </div>
            <Typography variant={fontSize} color="error" align="center">{errorText}</Typography>
        </div>
    );
};

export default Error;
