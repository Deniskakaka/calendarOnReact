import React from 'react';
import './day.scss';
import Hours from './Hours.jsx';
import moment from 'moment';
import { filterTasks, top, height } from './functionFilter.js';

const Day = (props) => {
    return (
        props.ArrayOFWeek.map(day => 
        <div className="dayWeek" key={day} onClick={props.openPopap}>
            {filterTasks(moment().day(day).format('YYYY-MM-DD'), props.tasks).map(i => 
            <div 
                className="task" 
                style={{top:`${top(i.start)}px`,height:`${height(i.start, i.end)}px` }} 
                key={i} 
                onClick={(e) => props.showData(i.start,i.end,i.timeStart,i.timeEnd)}>
                <span>{i.title}</span>
                <div>
                    <span>{i.start}</span>
                    <span>-</span>
                    <span>{i.end}</span>
                </div>
                <span></span>
            </div>)}
            <Hours changeTime={props.changeTime}/>
        </div>)
    );
};

export default Day;