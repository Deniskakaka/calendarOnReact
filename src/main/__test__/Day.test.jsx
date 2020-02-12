import React from 'react';
import { shallow } from 'enzyme';
import Day from '../Day.jsx';
import { filterTasks, top }  from '../functionFilter.js';

jest.mock('../functionFilter.js', () => {
    return {
        filterTasks: jest.fn(() => {
           return [{
            "id": "1",
            "title": "not task",
            "start": "01:00",
            "end": "02:00",
            "timeStart": "2020-02-10",
            "timeEnd": "2020-02-10",
            "description": ""
        }]}),
        top: jest.fn(() => '21:32'),
        height: jest.fn(() => '10:00', '13:00')
    }
});


describe('<Day/>', () => {
    it('should display show class task', () => {
        const wrappedComponent = shallow(<Day ArrayOFWeek={[1,2,3,4,5,6,7]}/>)
        expect(wrappedComponent.find('.task').exists()).toBeTruthy()
    });

    it('should display show class task', () => {
        const wrappedComponent = shallow(<Day ArrayOFWeek={[1,2,3,4,5,6,7]}/>)
        expect(wrappedComponent.find('Hours')).toMatchSnapshot(true)
    })
});