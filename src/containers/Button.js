import React from 'react'
import { connect } from 'react-redux'
import { sayHello,addItem,increment,decrement } from '../actions'

let Button = ({ whatsUp, stateObject, saySomething,add,incr,decr }) => (
  <div >
    {/* <button onClick={saySomething}>PRESS TO DISPATCH FIRST ACTION</button>
    <h2>{whatsUp}</h2> */}
    <button onClick={add}>Item Add</button>
    <button onClick={incr}>Add Cart</button>
    <button onClick={decr}>Remove Cart</button>
    {/* <label>Cart:{stateObject.} </label> */}
    {/* <h1>{stateObject.Count}</h1> */}
  </div>
)

const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
  saySomething: () => { dispatch(sayHello())},
  add: () => { dispatch(addItem())},
  incr: () => { dispatch(increment())},
  decr: () => { dispatch(decrement())}
})

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;
