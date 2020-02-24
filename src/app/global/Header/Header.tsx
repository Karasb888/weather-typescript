import * as React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import HomeIcon from '../../icons/HomeIcon';
import { Grid, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import * as styles from './Header.scss';

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <Grid alignItems="center" justify="flex-start" container spacing={1}>
                <Grid item xs={1}>
                    <Link component={RouterLink} to="/">
                        <HomeIcon color="primary" fontSize="large" />
                    </Link>
                </Grid>
                <Grid item xs={11}>
                    <SearchForm />
                </Grid>
            </Grid>
        </div>
    );
};

export default Header;
