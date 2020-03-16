import React, { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {
  render() {
    const contents = this.props.success
      ? null
      : (
        <form>
          <input 
            data-test="input-box"
            type="text"
            placeholder="Enter guess">  
          </input>
          <button type="submit"
            data-test="submit-button">
              Submit
          </button>
        </form>
      )
    return (
      <div data-test="input-component">
        {contents}
      </div>
    )
  }
}

const mapStateToProps = ({ success }) => {
  return {
    success
  }
}

const InputComponent = connect(
  mapStateToProps
)(Input)
export default InputComponent