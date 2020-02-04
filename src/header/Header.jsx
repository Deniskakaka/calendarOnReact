import React from 'react';
import HeaderMenu from './HeaderMenu.jsx';
import HeaderWeek from './HeaderWeek.jsx';
import './header.scss';

class Header extends React.Component {

    render() {
        return (
            <header>
                <HeaderMenu openPopap={this.props.openPopap} nextWeek={this.props.nextWeek} lastWeek={this.props.lastWeek} monday={this.props.monday} saturday={this.props.saturday} toDay={this.props.toDay}/>
                <HeaderWeek ArrayOFWeek={this.props.ArrayOFWeek}/>
            </header> 
        );
    }
};

export default Header;
