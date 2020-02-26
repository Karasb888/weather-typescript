import * as React from 'react';
import { Box } from '@material-ui/core';
import FavoriteCitiesList from '../FavoriteCitiesList/FavoriteCitiesList';
import UserInfo from '../UserInfo/UserInfo';

const Sidebar: React.FC = () => {
    return (
        <Box>
            <UserInfo />
            <FavoriteCitiesList />
        </Box>
    );
};

export default Sidebar;
