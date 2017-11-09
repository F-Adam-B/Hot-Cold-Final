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
    // setGamePlay(gamePlay) {
    //     this.setState({
    //         gamePlay
    //     })
    // }

    render() {
        // still need to add conditional for gamePlay instructions view
    return (
        <header>
            <TopNav />
            {/* <InfoModal onClick={() => this.setGamePlay(true)}/> */}
            <h1>HOT or COLD</h1>
        </header>
    );
    }
};
