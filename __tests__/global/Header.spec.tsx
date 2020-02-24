import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/app/global/Header/Header';

describe('++++ <Header /> ++++', () => {
    it('Renders correctly', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
});
