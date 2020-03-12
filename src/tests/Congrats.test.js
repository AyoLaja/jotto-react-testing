import React from 'react'
import { shallow } from 'enzyme'

import Congrats from '../components/Congrats'

import { findByTestAttr, checkProps } from '../../test/testUtils'


const defaultProps = { success: false }
const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Congrats {...setupProps} />)
}

describe('renders correctly', () => {
  it('renders without errors', () => {
    const wrapper = setup()
    const congratsComponent = findByTestAttr(wrapper, 'congrats-component')
    expect(congratsComponent.length).toBe(1)
  })

  it('renders no text when `success` prop is false', () => {
    const wrapper = setup({ success: false })
    const congratsComponent = findByTestAttr(wrapper, 'congrats-component')
    expect(congratsComponent.text()).toBe('')
  })

  it('renders non empty congrats message when `success` prop is true ', () => {
    const wrapper = setup({ success: true })
    const congratsMessage = findByTestAttr(wrapper, 'congrats-message')
    expect(congratsMessage.length).toBe(1)
  })

  it('does not throw warning with expected props', () => {
    const expectedProps = { success: false }
    checkProps(Congrats, expectedProps)
  })
})