import React from 'react';
import Day from './Day.jsx';

function Week ({...props}) {
    return (
        <Day 
            ArrayOfWeek={props.ArrayOfWeek} 
            openPopap={props.openPopap} 
            changeTime={props.changeTime} 
            tasks={props.tasks}  
            openPopapWithDelete={props.openPopapWithDelete}
            showData={props.showData}
            showHours={props.showHours} 
        />
    );
};

export default Week;