import * as React from 'react';
import { shallow } from 'enzyme';
import Error from '../../src/app/global/Error/Error';

const exampleProps: Array<string> = ['First example text', 'Second example text'];

describe('++++ <Error /> ++++', () => {
    exampleProps.forEach((errorText) => {
        it('Renders correctly with different props', () => {
            const props = { errorText };
            const wrapper = shallow(<Error {...props} />);
            expect(wrapper).toMatchSnapshot();
        });
    })
});
