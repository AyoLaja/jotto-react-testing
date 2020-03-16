import React, { Component } from 'react';
import { connect } from 'react-redux'

import './App.css';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/Input'
import { getSecretWord } from './redux/actions'

export class UnconnectedApp extends Component {
  componentDidMount() {
    //Get the secret word
    this.props.getSecretWord()
  }

  render() {
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={this.props.success}/>
        <Input/>
        <GuessedWords guessedWords={this.props.guessedWords}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state

  return {
    success, 
    guessedWords, 
    secretWord
  }
}

const appContainer = connect(
  mapStateToProps,
  { getSecretWord }
)(UnconnectedApp)

export default appContainer;
