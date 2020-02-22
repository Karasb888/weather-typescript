import * as React from 'react';
import { shallow } from 'enzyme';
import Container from '../../src/app/global/Container/Container';

const MockedChild: React.FC = () => <div></div>;

describe('++++ <Container /> ++++', () => {
    it('Renders correctly without child component', () => {
        const wrapper = shallow(<Container />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Renders correctly with child component', () => {
        const wrapper = shallow(<Container><MockedChild /></Container>);
        expect(wrapper).toMatchSnapshot();
    });
});
