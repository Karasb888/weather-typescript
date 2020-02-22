import * as React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/app/global/Footer/Footer';

describe('++++ <Footer /> ++++', () => {
    it('Renders correctly', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });
});
