import * as React from 'react';
import CloudsIcon from '../src/app/icons/CloudsIcon';
import ErrorIcon from '../src/app/icons/ErrorIcon';
import TempFeelsIcon from '../src/app/icons/TempFeelsIcon';
import TempIcon from '../src/app/icons/TempIcon';
import WindIcon from '../src/app/icons/WindIcon';
import { IconsProps } from '../src/app/icons/types';
import { shallow, ShallowWrapper } from 'enzyme';

const props: IconsProps = {
    width: '20',
    height: '20',
    svgClass: 'testClass',
    viewBox: '0 0 20 20'
};
let wrappers: Array<ShallowWrapper<IconsProps>>;

beforeEach(() => {
    wrappers = [
        shallow(<WindIcon {...props} />),
        shallow(<CloudsIcon {...props} />),
        shallow(<TempFeelsIcon {...props} />),
        shallow(<ErrorIcon {...props} />),
        shallow(<TempIcon {...props} />)
    ];
});

describe('Project svg icons', () => {
    it('renders correctly', () => {
        wrappers.forEach((wrapper) => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
