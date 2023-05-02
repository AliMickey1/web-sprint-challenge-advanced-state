import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Form(props) {
  const [disabled, setDisabled ] = useState(true)


  const { 
    form: { newFalseAnswer, newQuestion, newTrueAnswer },
    inputChange, 
    
    postQuiz 
  } = props

  const inputText = (evt) => {
    setDisabled(false)
    const value = evt.target.value
    const name = evt.target.name
    inputChange({ name, value })
    console.log(`name: ${name} & value: ${value}`)

  }

  const onSubmit = evt => {
    evt.preventDefault();

    console.log(`newQuestion: ${newQuestion}, newTrueAnswer: ${newTrueAnswer}, newFalseAnswer: ${newFalseAnswer}`)

    postQuiz({newQuestion, newTrueAnswer, newFalseAnswer})
  }


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input 
        maxLength={50} 
        onChange={inputText} 
        value={newQuestion}
        name="newQuestion"
        placeholder="Enter question" 
        />
      <input 
      maxLength={50} 
      onChange={inputText} 
      value={newTrueAnswer} 
      name="newTrueAnswer" 
      placeholder="Enter true answer" 
      />
      <input 
      maxLength={50} 
      onChange={inputText} 
      value={newFalseAnswer} 
      name="newFalseAnswer" 
      placeholder="Enter false answer" 
      />
      <button id="submitNewQuizBtn" disabled={disabled}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => ({form: st.form, newQuestion: st.newQuestion}), {inputChange: actions.inputChange, postQuiz: actions.postQuiz})(Form)
