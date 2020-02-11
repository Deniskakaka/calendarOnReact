import React from 'react';
import { shallow } from 'enzyme';
import SaidBar from '../SaidBar.jsx';


describe('<SaidBar/>', () => {
    it('should display class hour', () => {
        const wrappedComponent = shallow(<SaidBar/>)
        expect(wrappedComponent.find('.saidBar')).toMatchSnapshot(true);
    });
});

