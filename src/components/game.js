import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your guess!',
            // need to create random function for when page loads
            randomNumber: Math.floor(Math.random() * 100) + 1,
            }
        }

        newGame() {
            this.setState = {
                guesses: [],
                feedback: 'Make your guess!',
                randomNumber: Math.floor(Math.random() * 100 + 1)
            }
        }


    
    render() {
        // console.log(this.state)
    return (
        <div>
            <Header />
            <GuessSection feedback="Make your guess!" />
            <GuessCount count={5} />
            <GuessList guesses={[10, 15, 25]} />
        </div>
    );
}

}
