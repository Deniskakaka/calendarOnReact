import React from 'react';
import { shallow } from 'enzyme';
import HeaderMenu from '../HeaderMenu.jsx';
import moment from 'moment';

describe('<HeaderMenu/>', () => {
    it('should called openPopap', () => {
        const props = {
            openClearPopap: jest.fn(),
            toDay: jest.fn(),
            lastWeek: jest.fn(),
            nextWeek: jest.fn(),
            sunday: moment().isoWeekday(1),
            saturday:moment().isoWeekday(1).day(6)
        }
        const wrappedComponent = shallow(<HeaderMenu {...props}/>)
        wrappedComponent.find('.header-menu__create').simulate('click');
        expect(props.openClearPopap).toBeCalled();
    });

    it('should called Today', () => {
        const props = {
            openClearPopap: jest.fn(),
            toDay: jest.fn(),
            lastWeek: jest.fn(),
            nextWeek: jest.fn(),
            sunday: moment().isoWeekday(1),
            saturday:moment().isoWeekday(1).day(6)
        }
        const wrappedComponent = shallow(<HeaderMenu {...props}/>)
        wrappedComponent.find('.header-menu__today').simulate('click');
        expect(props.toDay).toBeCalled();
    });

    it('should called lastWeek', () => {
        const props = {
            openClearPopap: jest.fn(),
            toDay: jest.fn(),
            lastWeek: jest.fn(),
            nextWeek: jest.fn(),
            sunday: moment().isoWeekday(1),
            saturday:moment().isoWeekday(1).day(6)
        }
        const wrappedComponent = shallow(<HeaderMenu {...props}/>)
        wrappedComponent.find('.header-menu-change__left').simulate('click');
        expect(props.lastWeek).toBeCalled();
    });

    it('should called nextWeek', () => {
        const props = {
            openClearPopap: jest.fn(),
            toDay: jest.fn(),
            lastWeek: jest.fn(),
            nextWeek: jest.fn(),
            sunday: moment().isoWeekday(1),
            saturday:moment().isoWeekday(1).day(6)
        }
        const wrappedComponent = shallow(<HeaderMenu {...props}/>)
        wrappedComponent.find('.header-menu-change__right').simulate('click');
        expect(props.nextWeek).toBeCalled();
    });

    it('should show nowMonth', () => {
        const props = {
            openClearPopap: jest.fn(),
            toDay: jest.fn(),
            lastWeek: jest.fn(),
            nextWeek: jest.fn(),
            sunday: moment().isoWeekday(1),
            saturday:moment().isoWeekday(1).day(6)
        }
        const wrappedComponent = shallow(<HeaderMenu {...props}/>)
        expect(wrappedComponent.find('.header-menu-months__nowMonth').text()).toEqual(`${props.sunday.format("MMMM")}`);
    });
});