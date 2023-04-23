import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Wheel(props) {
  const initialValue = 0
  const [ active, setActive ] = useState(initialValue)
  const { moveClockwise, moveCounterClockwise } = props

  const moveActive = () => {
    const cog = [0, 1, 2, 3, 4, 5]

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
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(null, {moveClockwise: actions.moveClockwise, moveCounterClockwise: actions.moveCounterClockwise})(Wheel)