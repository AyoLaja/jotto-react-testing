import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../test/testUtils'
import GuessedWords from '../components/GuessedWords'

const defaultProps = {
  guessedWords: [
    { 
      guessedWord: 'train', 
      letterMatchCount: 3 
    }
  ]
}

const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<GuessedWords {...setupProps} />)
} 

describe('component renders', () => {
  it('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)
  })
})

describe('no words guessed', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] })
  })

  it('renders with out errors', () => {
    const guessedWordsComponent = findByTestAttr(wrapper, 'guessedWords-component')
    expect(guessedWordsComponent.length).toBe(1)
  })

  it('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
    expect(instructions.text().length).not.toBe(0)
  })
})

describe('words guessed', () => {
  let wrapper;

  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 }
  ]
   
  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })

  it('renders without error', () => {
    const guessedWordsComponent = findByTestAttr(wrapper, 'guessedWords-component')
    expect(guessedWordsComponent.length).toBe(1)
  })

  it('renders `guessed words` section', () => {
    const guessedWordsContainer = findByTestAttr(wrapper, 'guessed-words-container')
    expect(guessedWordsContainer.length).toBe(1)
  })

  it('displays cirrect number of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordsNodes.length).toBe(guessedWords.length)
  })
})