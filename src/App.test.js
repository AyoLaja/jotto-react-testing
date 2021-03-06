import React from 'react';
import { shallow } from 'enzyme'

import { storeFactory } from '../test/testUtils'
import App, { UnconnectedApp } from './App';

const setup = (state = {}) => {
  const store = storeFactory(state)
  const wrapper = shallow(<App store={store}/>).dive().dive()
  return wrapper
}

describe('redux properties', () => {
  it('has access to `success` state', () => {
    const success = true 
    const wrapper = setup({ success })
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })

  it('has access to `secretWord` state', () => {
    const secretWord = 'party'
    const wrapper = setup({ secretWord })
    const secretWordProp = wrapper.instance().props.secretWord
    expect(secretWordProp).toBe(secretWord)
  })

  it('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }]
    const wrapper = setup({ guessedWords })
    const guessedWordsProp = wrapper.instance().props.guessedWords
    expect(guessedWordsProp).toEqual(guessedWords)
  })

  it('has access to `getSecretWord` action creator as a function in props', () => {
    const wrapper = setup()
    const getSecretWordProp = wrapper.instance().props.getSecretWord
    expect(getSecretWordProp).toBeInstanceOf(Function)
  })
})

describe('getSecretWord', () => {
  it('runs on App mount', () => {
    //Create mock function
    //Jest will watch to see when this is called and how
    const getSecretWordMock = jest.fn()

    //Set up app component with getSecretWordMock function as a getSecretWord prop
    //Not using setup function because that uses connected app
    const props = {
      success: false,
      getSecretWord: getSecretWordMock,
      guessedWords: []
    }
    const wrapper = shallow(<UnconnectedApp {...props}/>)

    //Run lifecycle method
    wrapper.instance().componentDidMount()

    //Check to see if mock ran
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length

    expect(getSecretWordCallCount).toBe(1)

  })
})
