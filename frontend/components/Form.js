import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Form(props) {
  const [disabled, setDisabled ] = useState(true)
  

    const { 
      form: { newFalseAnswer, newQuestion, newTrueAnswer },
      inputChange, postQuiz, resetForm
    } = props

    const isDisabled = () => {
        if((newQuestion.trim().length > 0) && (newTrueAnswer.trim().length > 0) && (newFalseAnswer.trim().length > 0)) {
        setDisabled(false)
      }
      else{
        setDisabled(true)
      }

    }
 
    const onChange = evt => {
      const { name, value } = evt.target
      inputChange({ name, value })
      isDisabled()
      // console.log(`value: ${value} disabled: ${disabled}`)
    }

  const onSubmit = evt => {
    evt.preventDefault();

    // console.log(`newQuestion: ${newQuestion}, newTrueAnswer: ${newTrueAnswer}, newFalseAnswer: ${newFalseAnswer}`)
    var question_text = newQuestion
    var true_answer_text = newTrueAnswer
    var false_answer_text = newFalseAnswer
    postQuiz({question_text, true_answer_text, false_answer_text})
    resetForm()
  }


  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input 
        maxLength={50} 
        id="newQuestion"
        onChange={onChange}
        value={newQuestion}
        name="newQuestion"
        placeholder="Enter question" 
        />
      <input 
      maxLength={50} 
      id="newTrueAnswer"
      onChange={onChange}
      value={newTrueAnswer} 
      name="newTrueAnswer" 
      placeholder="Enter true answer" 
      />
      <input 
      maxLength={50} 
      id="newFalseAnswer"

      onChange={onChange}
      value={newFalseAnswer} 
      name="newFalseAnswer" 
      placeholder="Enter false answer" 
      />
      <button id="submitNewQuizBtn" name="submitNewQuizBtn" disabled={disabled}>Submit new quiz</button>
    </form>
  )
}

export default connect(st => ({form: st.form, newQuestion: st.newQuestion}), {inputChange: actions.inputChange, postQuiz: actions.postQuiz, resetForm: actions.resetForm})(Form)
