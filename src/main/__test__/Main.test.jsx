import React from 'react';
import { shallow } from 'enzyme';
import Main from '../Main.jsx';


describe('<Main/>', () => {
    it('should display component SaidBar', () => {
        const wrappedComponent = shallow(<Main/>)
        expect(wrappedComponent.find('SaidBar').exists()).toBeTruthy()
    });

    it('should display component Week', () => {
        const wrappedComponent = shallow(<Main/>)
        expect(wrappedComponent.find('Week').exists()).toBeTruthy()
    });

    it('should display component Week', () => {
        const wrappedComponent = shallow(<Main open={false}/>)
        expect(wrappedComponent.find('Popap').exists()).toEqual(false)
    });

    it('should display component Week', () => {
        const wrappedComponent = shallow(<Main open={true}/>)
        expect(wrappedComponent.find('Popap').exists()).toEqual(true)
    });
});