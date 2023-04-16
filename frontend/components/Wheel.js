import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Wheel(props) {

  const { moveClockwise, moveCounterClockwise, wheel } = props

  const onClick = evt => {
    if(evt.target.value === 'moveCounterClockwise') {
      moveClockwise()
      
    }
  }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={onClick} value={moveClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={onClick} value={moveCounterClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => ({wheel: st.wheel}), {moveClockwise: actions.moveClockwise, moveCounterClockwise: actions.moveCounterClockwise})(Wheel)