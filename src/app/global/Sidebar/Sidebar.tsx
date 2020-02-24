import * as React from 'react';
import { Box } from '@material-ui/core';
import FavoriteCitiesList from '../FavoriteCitiesList/FavoriteCitiesList';

const Sidebar: React.FC = () => {
    return (
        <Box>
            <FavoriteCitiesList />
        </Box>
    );
};

export default Sidebar;
