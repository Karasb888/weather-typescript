import * as React from 'react';
import { shallow } from 'enzyme';
import Home from '../../src/app/home/Home/Home';

describe('++++ <Home /> ++++', () => {
    it('Renders correctly', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper).toMatchSnapshot();
    });
});
