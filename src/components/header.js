import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
    constructor(props){
        super();
        this.state = {
            gamePlay: false,
           }
    }
// if true, sets the view to the game play instructions
    displayGamePlay(gamePlay) {
        this.setState({
            gamePlay: !this.state.gamePlay
        })
    }

    render() {
        let infoModal;
        if(this.state.gamePlay) {
            infoModal = <InfoModal onClick={() => this.displayGamePlay()}/>
        }
      
    return (
        <header>
            <TopNav onInfo={() => this.displayGamePlay()} 
            newGame={this.props.newGame}/>
            { infoModal }
            <h1>HOT or COLD</h1>
        </header>
    );
    }
};
