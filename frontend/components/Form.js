import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'




export function Form(props) {
  const { inputChange, newFalseAnswer, newQuestion, newTrueAnswer } = props

  // const inputQuestion = '';
  // const inputTruth = '';
  // const inputFalse = '';

  const inputText = ({ target: { name, value } }) => {
    inputChange({ name, value })
  }

  const onSubmit = evt => {
    evt.preventDefault();

  }

  const isDisabled = () => {
    return (
      newQuestion.trim().length < 0 && 
      newTrueAnswer.trim().length < 0 && 
      newFalseAnswer.trim().length < 0

    )
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input 
        maxLength={50} 
        onChange={inputText} 
        value={newQuestion} 
        id="newQuestion"
        placeholder="Enter question" 
        />
      <input 
      maxLength={50} 
      onChange={inputText} 
      value={newTrueAnswer} 
      id="newTrueAnswer" 
      placeholder="Enter true answer" 
      />
      <input 
      maxLength={50} 
      onChange={inputText} 
      value={newFalseAnswer} 
      id="newFalseAnswer" 
      placeholder="Enter false answer" 
      />
      <button id="submitNewQuizBtn" disabled={isDisabled}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => ({form: st.form, newQuestion: st.newQuestion, newTrueAnswer: st.newTrueAnswer, newFalseAnswer: st.newFalseAnswer}), {inputChange: actions.inputChange, postAnswer: actions.postAnswer})(Form)
