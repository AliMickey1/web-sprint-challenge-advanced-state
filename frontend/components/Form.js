import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Form(props) {
  const [disabled, setDisabled ] = useState(true)
  const [disableQuestion, setDisableQuestion] = useState(true)
  const [disableTrue, setDisableTrue] = useState(true)
  const [disableFalse, setDisableFalse] = useState(true)


    const { 
      form: { newFalseAnswer, newQuestion, newTrueAnswer },
      inputChange, postQuiz 
    } = props

  const newQuestionInput = (evt) => {

    const value = evt.target.value
    const name = evt.target.name
    inputChange({ name, value })
    
    if(evt.target.value.trim().length > 0) setDisableQuestion(false)

    if((disableQuestion === false) && (disableTrue === false) && (disableTrue === false)) {
      setDisabled(false)
    }

    console.log(`newQuestion: ${newQuestion} & value: ${value}`)
    console.log(`questiondisabled: ${disableQuestion} disabled = ${disabled}`)
  }
  const newTrueAnswerInput  = (evt) => {

    const value = evt.target.value
    const name = evt.target.name
    inputChange({ name, value })
    
    if(evt.target.value.trim().length > 0) setDisableTrue(false)

    if((disableQuestion === false) && (disableTrue === false) && (disableTrue === false)) {
      setDisabled(false)
    }
    console.log(`newTrueAnswer: ${newTrueAnswer} & value: ${value}`)
    console.log(`disable true answer: ${disableTrue} disabled = ${disabled}`)
  }

  const newFalseAnswerInput  = (evt) => {

    const value = evt.target.value
    const name = evt.target.name
    inputChange({ name, value })
    
    if(evt.target.value.trim().length > 0) setDisableFalse(false)

    if((disableQuestion === false) && (disableTrue === false) && (disableTrue === false)) {
      setDisabled(false)
    }
    console.log(`newFalseAnswer: ${newFalseAnswer} & value: ${value}`)
    console.log(`disable false answer: ${disableFalse} disabled = ${disabled}`)
  }

  const onSubmit = evt => {
    evt.preventDefault();

    console.log(`newQuestion: ${newQuestion}, newTrueAnswer: ${newTrueAnswer}, newFalseAnswer: ${newFalseAnswer}`)
    // const { question_text, true_answer_text, false_answer_text } = 
    postQuiz({newQuestion, newTrueAnswer, newFalseAnswer})
  }


  return (
    <form id="form">
      <h2>Create New Quiz</h2>
      <input 
        maxLength={50} 
        onChange={newQuestionInput} 
        value={newQuestion}
        name="newQuestion"
        placeholder="Enter question" 
        />
      <input 
      maxLength={50} 
      onChange={newTrueAnswerInput} 
      value={newTrueAnswer} 
      name="newTrueAnswer" 
      placeholder="Enter true answer" 
      />
      <input 
      maxLength={50} 
      onChange={newFalseAnswerInput} 
      value={newFalseAnswer} 
      name="newFalseAnswer" 
      placeholder="Enter false answer" 
      />
      <button onClick={onSubmit} id="submitNewQuizBtn" disabled={disabled}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => ({form: st.form, newQuestion: st.newQuestion}), {inputChange: actions.inputChange, postQuiz: actions.postQuiz})(Form)
