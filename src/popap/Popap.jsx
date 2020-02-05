import React from 'react'; 
import './popap.scss';
import { getRandomIntInclusive } from '../main/functionFilter.js';
 
class Popap extends React.Component {

    state = {
        description: '',
        title: '',
        dateStart: '',
        dateEnd: '',
        start: '' ,
        end: '',
        id: getRandomIntInclusive(0,100)
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]:value,
        })
    };

    handleSubmit = event => {
        event.preventDefault();
    }
    

    render() {
        return (
            <>
                <form className={this.props.open ? 'popup event' : 'popup event display-none'} onSubmit={this.handleSubmit}>
                    <span className="popup__btn-close" onClick={this.props.closePopap}><img className="close"
                            src="https://img.icons8.com/color/48/000000/close-window.png"></img></span>
                    <input className="event__name" name="title" type="text" required placeholder="Add title" onChange={this.handleChange} value={this.state.title}></input>
                    <div className="popup__picker">
                        <img className="clock" src="https://img.icons8.com/pastel-glyph/64/000000/time.png"></img>
                        <input className="event__date-start" name="dateStart" required type="date" onChange={this.handleChange} value={this.state.dateStart}></input>
                        <input className="event__time-start select" name="start" required type="time" step="900" onChange={this.handleChange} value={this.state.start}></input>
                        <span className='line'></span>
                        <input className="event__time-end select" name="end" required type="time" step="900"  onChange={this.handleChange} value={this.state.end}></input>
                        <input className="event__date-end" name="dateEnd" required type="date" onChange={this.handleChange} value={this.state.dateEnd}></input>
                    </div>
                    <img className="multilineText" src="https://img.icons8.com/windows/32/000000/multiline-text.png"></img>
                    <textarea className="event__description" name="description" cols="15" rows="5"
                        placeholder="Add description" onChange={this.handleChange} value={this.state.description} ></textarea>
                    <div className="footer-popup">
                        {this.props.delete ? <span className="event__btn-delete" onClick={(e) => this.props.deleteTask(
                            this.state.id,this.props.tasks
                        )}><img className="bascket"
                                src="https://img.icons8.com/windows/32/000000/trash.png"></img></span>: ''}
                        <button className="event__btn-save" onClick={(e) => this.props.creacteTask({
                            title:this.state.title,
                            start:this.state.start,
                            end:this.state.end,
                            timeStart:this.state.dateStart,
                            timeEnd: this.state.dateEnd,
                            description:this.state.description,
                            id: this.state.id
                        })}>Save</button>
                    </div>
                </form>
            </>
        );
    }
    
};

export default Popap;