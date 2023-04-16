import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'




export function Form(props) {
  const { inputChange } = props

  const inputQuestion = '';
  const inputTruth = '';
  const inputFalse = '';

  const onChange = evt => {
    const { id, value } = evt.target
    inputChange({ id, value })
    
  }

  const onSubmit = evt => {
    evt.preventDefault();

  }

  // const isDisabled = () => {
  //   return (
  //     inputQuestion.trim().length > 0 && 
  //     inputTruth.trim().length > 0 && 
  //     inputFalse.trim().length > 0

  //   )
  // }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} value={inputQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} value={inputTruth} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={onChange} value={inputFalse} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" >Submit new quiz</button>
    </form>
  )
}

export default connect(st => ({form: st.form}), {inputChange: actions.inputChange})(Form)
