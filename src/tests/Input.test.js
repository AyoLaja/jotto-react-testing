import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr } from '../../test/testUtils'
import Input from '../components/Input'

const setup = (initialState = {}) => {
  const wrapper = shallow(<Input />)
  console.log(wrapper.debug())
}
setup()

describe('renders correctly', () => {
  describe('word has not been guessed', () => {
    it('renders component without error', () => {

    })

    it('renders input box', () => {

    })

    it('renders submit button', () => {

    })
  })

  describe('word has been guessed', () => {
    it('renders component without error', () => {

    })

    it('does not render input box', () => {

    })

    it('does not render submit button', () => {

    })
  })
})

describe('update state', () => {

})