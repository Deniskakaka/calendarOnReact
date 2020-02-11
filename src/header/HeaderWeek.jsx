import React from 'react';
import Day from './Day.jsx';

const HeaderWeek = (props) => {
    return (
        <div className="week">
            <Day ArrayOFWeek={props.ArrayOFWeek}/>
        </div>
    );
};

export default HeaderWeek;