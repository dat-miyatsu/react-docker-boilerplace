import React from 'react'
import { connect } from 'react-redux'
import { store, changeMessage } from '../redux'
import AppDemo from './AppDemo/AppDemo'

export function HelloWorld (props) {
  return (
    <div className='hello-world'>
      <p>Hello world!</p>
      <p> {props.exampleMessage} </p>

      <AppDemo />

    </div>
  )
}

// REACT-REDUX
// pass down responsive store state as props
const mapStateToProps = state => ({exampleMessage: state.exampleReducer.message})

// pass down dispatchers as props
const mapDispatchToProps = dispatch => ({changeMessage: txt => dispatch(changeMessage(txt))})

// hook up props with base component
const ConnectedWorld = connect(mapStateToProps, mapDispatchToProps)(HelloWorld)

// pass down store obj as direct props
const App = () => <ConnectedWorld store={store} />

export default App
