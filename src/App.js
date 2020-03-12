import React, { Component } from 'react';
import './App.css';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';

class App extends Component {
  render() {
    const guessedWords = [
      { guessedWord: 'train', matchingLetterCount: 2 }
    ]
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={true}/>
        <GuessedWords guessedWords={guessedWords}/>
      </div>
    );
  }
}

export default App;
