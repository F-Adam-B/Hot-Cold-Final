import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 35,
            guesses: 22,
            // think the below two keys need to move
            what: true,
            newGame: true,
            // need to create random function for when page loads
            randomNumber: function getRandomNumber(min,max) {
                return Math.random() * (1 - 100) + 1;
            }
        }

    }


    
    render() {
        console.log(this.state)
    return (
        <div>
            <Header />
            <GuessSection feedback="Make your guess!" />
            <GuessCount count={3} />
            <GuessList guesses={[10, 15, 25]} />
        </div>
    );
}
}

