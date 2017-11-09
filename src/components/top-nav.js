import React from 'react';

import './top-nav.css';

export default class TopNav extends React.Component {

    newGame(newGame){
        event.preventDefault();
        if (this.props.onNewGame){
            this.props.onNewGame();
        }
    }
    onInfo(info){
        event.preventDefault();
        if (this.props.onInfo){
            this.props.oninfo();
        }
    }
    

    render() {
        
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a onClick={e => this.props.onInfo(e)} className="what" href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a onClick={e => this.newGame(e)} className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    
    );
}
}

