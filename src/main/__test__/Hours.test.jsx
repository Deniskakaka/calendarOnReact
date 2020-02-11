import React from 'react';
import { shallow } from 'enzyme';
import Hours from '../Hours.jsx';


describe('<Hours/>', () => {
    it('should display class hour', () => {
        const wrappedComponent = shallow(<Hours/>)
        expect(wrappedComponent.find('.hour').exists()).toBeTruthy()
    });
});