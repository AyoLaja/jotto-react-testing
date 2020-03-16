import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, storeFactory } from '../../test/testUtils'
import Input from '../components/Input'

const setup = (initialState = {}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<Input store={store}/>).dive().dive()
  return wrapper
}

describe('renders correctly', () => {
  describe('word has not been guessed', () => {
    let wrapper;

    beforeEach(() => {
      const initialState = { success: false }
      wrapper = setup(initialState)
    })

    it('renders component without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'input-component')
      expect(inputComponent.length).toBe(1)
    })

    it('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(1)
    })

    it('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(1)
    })
  })

  describe('word has been guessed', () => {
    let wrapper

    beforeEach(() => {
      const initialState = { success: true }
      wrapper = setup(initialState)
    })

    it('renders component without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'input-component')
      expect(inputComponent.length).toBe(1)
    })

    it('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(0)
    })

    it('does not render submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.length).toBe(0)
    })
  })
})

describe('redux props', () => {
  it('has success state as prop', () => {
    const success = true
    const wrapper = setup({ success })

    //Get react component with instance()
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  })

  it('`guessWord` action creator is a function prop', () => {
    const wrapper = setup()
    const guessWordProp = wrapper.instance().props.guessWord
    expect(guessWordProp).toBeInstanceOf(Function)
  })
})

describe('update state', () => {

})