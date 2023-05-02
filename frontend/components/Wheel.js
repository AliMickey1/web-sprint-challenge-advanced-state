import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Wheel(props) {
  const initialValue = 0
  var moveClockwiseReset = 0
  var moveCounterClockwiseReset = 5
  const [ active, setActive ] = useState(initialValue)
  const { moveClockwise, moveCounterClockwise, wheel } = props


  
  const moveRight = () => {

    // if(active <= 0)
    // {
    //   setActive(active + 6)
    // }
    // else{
    // setActive(active + 1)
    // }
    moveCounterClockwise()
    console.log(`wheel: ${wheel}`)
  }

  const moveLeft = () => {

    // // position = active - 1
    // setActive(active - 1)

    moveClockwise()
    console.log(`wheel: ${wheel}`)
  }


  return (
    <div id="wrapper">
      


      <div id="wheel">


        <div className={`cog${wheel === 0 ? " active" : ""}`} style={{ "--i": 0 }}>{wheel===0 ? "B" : ""}</div>
        <div className={`cog${wheel === 1 ? " active" : ""}`} style={{ "--i": 1 }}>{wheel===1 ? "B" : ""}</div>
        <div className={`cog${wheel === 2 ? " active" : ""}`} style={{ "--i": 2 }}>{wheel===2 ? "B" : ""}</div>
        <div className={`cog${wheel === 3 ? " active" : ""}`} style={{ "--i": 3 }}>{wheel===3 ? "B" : ""}</div>
        <div className={`cog${wheel === 4 ? " active" : ""}`} style={{ "--i": 4 }}>{wheel===4 ? "B" : ""}</div>
        <div className={`cog${wheel === 5 ? " active" : ""}`} style={{ "--i": 5 }}>{wheel===5 ? "B" : ""}</div>
                {/* <div className={`cog ${active ? position === 1 : ''}`}></div> */}
        {/* <div className={`cog ${active ? position === 1 : ''}`} style={{ "--i": 1 }}></div> */}
                {/* <div className="cog active" style={{ "--i": 0 }}>B</div> */}
        
        {/* <div className="cog active" style={{ "--i": 0 }}>B</div> */}
        {/* <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>--i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveRight} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={moveLeft}>Clockwise</button>
      </div>
    </div>
  )
}

export default connect(st => ({wheel: st.wheel}), {moveClockwise: actions.moveClockwise, moveCounterClockwise: actions.moveCounterClockwise})(Wheel)