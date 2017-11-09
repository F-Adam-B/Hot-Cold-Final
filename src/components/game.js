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

        guess() {
            const guess = parseInt(guess, 10);
            if (NaN(guess)) {
            this.setState = ({
                feedback: 'Guess must be a number',
            })
            return
        };
        const difference = Math.abs(guess - this.state.randomNumber);

        if (difference >= 50) {
            feedback = 'You\'re ice cold';
        }
        else if (difference >= 25) {
            feedback = 'You\'re cold';
        }
        else if (difference >= 10) {
            feedback = 'You\'re getting warmer';
        }
        else if (difference >= 5) {
            feedback = 'You\'re hot';
        }
        else if (difference >= 1) {
            feedback = 'You\'re red hot';
        }
        else {
            feedback = 'You\'ve got it!';
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess],
        })
         
    }



    
    render() {
        // console.log(this.state)
    return (
        <div>
            <Header newGame={() => this.newGame()}/>
            <GuessSection feedback={this.state.feedback}
            onGuess={(guess) => this.guess(guess)} />
            <GuessCount count={this.state.guesses.length} />
            <GuessList guesses={this.state.guesses} />
        </div>
    );
}

}
