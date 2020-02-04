import React from 'react';
import { TwentyFour } from './functionTwentyFour.js';
import './hour.scss';
import moment from 'moment';

const Hours = (props) => {
    return (
        TwentyFour().map( hour => 
        <div onClick={(e) => props.changeTime(hour)}
            className="hour" 
            key={hour}>
        </div>)
    );
};

export default Hours;