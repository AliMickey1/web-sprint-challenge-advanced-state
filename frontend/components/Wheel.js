import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Wheel(props) {
  const initialValue = 0
  var position = 0
  const [ active, setActive ] = useState(initialValue)
  const { moveClockwise, moveCounterClockwise } = props


  
  const moveRight = () => {
    position = active + 1
    setActive(active + 1)
    moveClockwise()
    console.log(position)
  }

  const moveLeft = () => {
    position = active - 1
    setActive(active - 1)
    moveCounterClockwise()
    console.log(position)
  }


  return (
    <div id="wrapper">
      


      <div id="wheel">

        {/* <div className={`cog ${active ? position === 1 : ''}`}></div> */}
        <div className={`cog ${active ? position === 1 : ''}`} style={{ "--i": 1 }}></div>
                {/* <div className="cog active" style={{ "--i": 0 }}>B</div> */}
        
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveLeft} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={moveRight}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(null, {moveClockwise: actions.moveClockwise, moveCounterClockwise: actions.moveCounterClockwise})(Wheel)