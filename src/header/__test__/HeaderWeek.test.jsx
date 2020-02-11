import React from 'react';
import { shallow } from 'enzyme';
import HeaderWeek from '../HeaderWeek.jsx';

describe('<HeaderWeek/>', () => {
    it('should display week element class', () => {
        const wrappedComponent = shallow(<HeaderWeek />)
        expect(wrappedComponent.find('.week').exists()).toBeTruthy()
    });

    it('should display component Day', () => {
        const wrappedComponent = shallow(<HeaderWeek />)
        expect(wrappedComponent.find('Day').exists()).toBeTruthy()
    })
});