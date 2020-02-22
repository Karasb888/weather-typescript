import * as React from 'react';
import { shallow } from 'enzyme';
import { SearchForm } from '../../src/app/global/SearchForm/SearchForm';
import { createMemoryHistory } from 'history';

const history = createMemoryHistory();
const props = {
    history
};

describe('++++ <SearchForm /> ++++', () => {
    it('Renders correctly', () => {
        const wrapper = shallow(<SearchForm {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
