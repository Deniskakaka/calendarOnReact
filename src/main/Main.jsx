import React from 'react';
import Week from './Week.jsx';
import Popap from '../popap/Popap.jsx';
import './main.scss';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.changeTime = this.changeTime.bind(this);
	}

	state = {
		timeStart: '',
		timeEnd: '',
		start: ''
	};

	changeTime(number, date) {
		this.setState({
			timeStart:
				+number < 10
					? '0' + number + ':' + '00'
					: number + ':' + '00',
			timeEnd:
				+number < 10
					? '0' + (number + 1) + ':' + '00'
					: number + 1 + ':' + '00',
			start: date
		});
	};

	render() {
		return (
			<main>
				<Week
					ArrayOFWeek={this.props.ArrayOFWeek}
					openPopap={this.props.openPopap}
					changeTime={this.changeTime}
					tasks={this.props.tasks}
					openPopapWithDelete={this.props.openPopapWithDelete}
					showData={this.props.showData} 
				/>
				<Popap
					open={this.props.open}
					closePopap={this.props.closePopap}
					start={this.state.start}
					creacteTask={this.props.creacteTask}
					delete={this.props.delete}
					deleteTask={this.props.deleteTask}
					tasks={this.props.tasks}
					start={this.props.start} 
					end={this.props.end} 
					timeStart={this.props.timeStart}
					timeEnd={this.props.timeEnd} 
				/>
			</main>
		);
	}
}

export default Main;

//start
//end
//timeStart
//timeEnd
//text
//title
