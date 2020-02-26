import * as React from 'react';
import { shallow } from 'enzyme';
import Error, { Props } from '../../src/app/global/Error/Error';

const exampleProps: Array<Props> = [{errorText: 'text', errorSize: 'large'}, {errorText: 'text2222', errorSize: 'small'}];

describe('++++ <Error /> ++++', () => {
    exampleProps.forEach((errorProp) => {
        it('Renders correctly with different props', () => {
            const wrapper = shallow(<Error {...errorProp} />);
            expect(wrapper).toMatchSnapshot();
        });
    })
});
