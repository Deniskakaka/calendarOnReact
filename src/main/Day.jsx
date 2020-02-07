import React from 'react';
import './day.scss';
import Hours from './Hours.jsx';
import moment from 'moment';
import { filterTasks, top, height } from './functionFilter.js';

class Day extends React.Component {

    state = {
        time: top(moment().format('HH:mm'))
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                time: top(moment().format('HH:mm'))
            })
        }, 60000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            this.props.ArrayOFWeek.map(day => 
            <div className="dayWeek" key={day} onClick={this.props.openPopap}>
                {moment().format('YYYY-MM-DD') === moment().day(day).format("YYYY-MM-DD") ? <div className="redLine" style={{top:`${+this.state.time}px`}}></div> : null}
                {filterTasks(moment().day(day).format('YYYY-MM-DD'), this.props.tasks).map(i => 
                <div 
                    className="task" 
                    style={{top:`${top(i.start)}px`,height:`${height(i.start, i.end)}px`}} 
                    key={day} 
                    onClick={(e) => this.props.showData(i.start,i.end,i.timeStart,i.timeEnd,i.id)}>
                    <span className="task__title">{i.title}</span>
                    <div>
                        <span className="task__time">{i.start}</span>
                        <span className="task__line">-</span>
                        <span className="task__time">{i.end}</span>
                    </div>
                <span>{i.description}</span>
                </div>)}
                <Hours changeTime={this.props.changeTime} showData={this.props.showData} day={day} showHours={this.props.showHours}/>
            </div>)
        );
    }
    
};

export default Day;