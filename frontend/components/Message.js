import React from 'react'
import { connect } from 'react-redux'

export function Message({ infoMessage }) {

  const { main, code, time } = infoMessage

  return (

      <span>{main}</span>

  )
}

export default connect(st => ({infoMessage: st.infoMessage}))(Message)
