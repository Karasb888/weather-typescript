import * as React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../src/app/global/Sidebar/Sidebar';

describe('++++ <Sidebar /> ++++', () => {
    it('Renders correctly', () => {
        const wrapper = shallow(<Sidebar />);
        expect(wrapper).toMatchSnapshot();
    });
});
