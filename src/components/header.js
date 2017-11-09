import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends React.Component {
    constructor(props){
        super();
        this.state = {
            gamePlay: false,
            // newGame: false,
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
        
        // still need to add conditional for gamePlay instructions view
        // if(!this.state.gamePlay) {
        //     return 
        // }
    return (
        <header>
            <TopNav />
            { infoModal }
            <h1>HOT or COLD</h1>
        </header>
    );
    }
};
