import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = ({ guessedWords }) => {
  let content
  if (guessedWords.length === 0) {
    content = (
      <span data-test="guess-instructions">
        Guess a letter
      </span>
    )
  }
  else {
    const guessedWordRows = guessedWords.map((item, index) => {
      return (
        <tr data-test="guessed-word" key={index}>
          <td>{item.guessedWord}</td>
          <td>{item.matchingLetterCount}</td>
        </tr>
      )
    })
    content = (
      <div data-test="guessed-words-container">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr><th>Guess</th>
            <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWordRows}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div data-test="guessedWords-component">
      {content}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
}

export default GuessedWords