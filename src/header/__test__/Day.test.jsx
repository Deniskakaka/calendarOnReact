import React from 'react';
import { shallow } from 'enzyme';
import Day from '../Day.jsx';

describe('<Day/>', () => {
    it('should display Todo List', () => {
        const wrappedComponent = shallow(<Day ArrayOFWeek={[1,2,3,4,5,6,7]}/>)
        expect(wrappedComponent.find('.day').exists()).toBeTruthy()
    })
});