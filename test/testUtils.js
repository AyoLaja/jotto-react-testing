import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from '../src/redux/reducers'
import { middlewares } from '../src/redux/configureStore'

/**
 * Creates testing store with app's reducers
 * @param {Object} initialState 
 */
export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes, 
    conformingProps, 
    'prop', 
    component.name
  )
  expect(propError).toBeUndefined()
}