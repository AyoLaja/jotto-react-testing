import React, { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const InputComponent = connect(
  mapStateToProps
)(Input)
export default InputComponent