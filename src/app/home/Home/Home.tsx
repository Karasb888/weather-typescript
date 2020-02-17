import * as React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>Home page stuf <Link to="/city/London/">Go to city</Link><Link to="/city/London/2020-2-17/">Go to Date</Link></div>
    );
};

export default Home;
