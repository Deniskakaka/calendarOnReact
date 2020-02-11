import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header.jsx';

describe('<Header/>', () => {
    it('should display HeaderMenu', () => {
        const wrappedComponent = shallow(<Header />)
        expect(wrappedComponent.find('HeaderMenu').exists()).toBeTruthy()
    });

    it('should display HeaderWeek', () => {
        const wrappedComponent = shallow(<Header />)
        expect(wrappedComponent.find('HeaderWeek').exists()).toBeTruthy()
    });
});