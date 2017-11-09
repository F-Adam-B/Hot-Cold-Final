import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
    
    onGuess(event){
        event.preventDefault();

        if (this.props.onGuess){
            const value = this.input.value;
            this.props.onGuess(value);
        }
        this.input.value='';
    }

    render() {

    return (
        <form>
            {/* needs onSubmit event listener */}
            <input onChange={e => this.onGuess(e.target.value)} value={this.value} type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder={Math.round(Math.random() * 100)} required 
                ref={input => this.input = input}/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
}
};

