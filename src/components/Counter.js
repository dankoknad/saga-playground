import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrementAsync: PropTypes.func.isRequired
  };

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  render() {
    const { value, onIncrement, onDecrement, onIncrementAsync } = this.props
    return (
      <p className="text-center">
        Count: {value}
        <br/>
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        <br/>
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
          Increment async
        </button>
      </p>
    )
  }
}


const mapStateToProps = state => {
  return {
    value: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => { dispatch({type: 'INCREMENT'}) },
    onDecrement: () => {  dispatch({type: 'DECREMENT'}) },
    onIncrementAsync: () => {  dispatch({type: 'INCREMENT_ASYNC'}) }
  }
}

export default Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)
