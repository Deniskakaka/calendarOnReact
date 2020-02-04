import React from 'react';
import Header from './header/Header.jsx';
import Main from './main/Main.jsx';
import moment from 'moment';

let mass = [];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.creacteTask = this.creacteTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.showData = this.showData.bind(this);
    }
    state = {
        ArrayOFWeek: [0,1,2,3,4,5,6],
        monday: moment().isoWeekday(1),
        saturday: moment().isoWeekday(6),
        open: false,
        delete: false,
        tasks: [],
        start:'',
        end:'',
        timeStart:'',
        timeEnd:''
    };

    nextWeek = () => {
        this.setState({
            ArrayOFWeek: this.state.ArrayOFWeek.map(day => day + 7),
            monday: this.state.monday.add(7, 'days'),
            saturday: this.state.saturday.add(7, 'days'),
        });
    }

    lastWeek = () => {
        this.setState({
            ArrayOFWeek: this.state.ArrayOFWeek.map(day => day - 7),
            monday: this.state.monday.add(- 7, 'days'),
            saturday: this.state.saturday.add(- 7, 'days'),
        });
    }

    toDay = () => {
        this.setState({
            ArrayOFWeek: [0,1,2,3,4,5,6],
            monday: moment().isoWeekday(1),
            saturday: moment().isoWeekday(6)
        })
    }

    openPopap = () => {
        this.setState({
            open: true,
        })
    }

    openPopapWithDelete = () => {
        this.setState({
            open:true,
            delete:true
        })
    }

    closePopap = () => {
        this.setState({
            open: false,
            delete:false
        })
    }

    creacteTask (object) {
        mass.push(object)
        this.setState({
            tasks: mass,
            open:false
        })
    }

    deleteTask (start,end,timeStart,timeEnd,tasks) {
        this.setState({
            open:false
        })
       for (let i = 0; i < tasks.length; i++) {
           if (tasks[i].start === start && tasks[i].end === end && tasks[i].timeStart === timeStart && tasks[i].timeEnd === timeEnd) {
               mass.splice(i,1);
           }
       }
    }

    showData (start, end,timeStart, timeEnd) {
        this.setState({
            start: start,
            end: end,
            timeStart: timeStart,
            timeEnd: timeEnd
        })
    }

    render() {
        return (
           <> 
            <Header 
                openPopap={this.openPopap} 
                monday={this.state.monday} 
                saturday={this.state.saturday} 
                ArrayOFWeek={this.state.ArrayOFWeek} 
                nextWeek={this.nextWeek} lastWeek={this.lastWeek} 
                toDay={this.toDay}
            />
            <Main 
                ArrayOFWeek={this.state.ArrayOFWeek} 
                openPopap={this.openPopap} 
                closePopap={this.closePopap} 
                open={this.state.open} 
                creacteTask={this.creacteTask} 
                tasks={this.state.tasks} 
                delete={this.state.delete}
                openPopapWithDelete={this.openPopapWithDelete}
                deleteTask={this.deleteTask} 
                showData={this.showData} 
                start={this.state.start}
                end={this.state.end} 
                timeStart={this.state.timeStart}
                timeEnd={this.state.timeEnd}    
            />
           </> 
        );
    };
};

export default App;