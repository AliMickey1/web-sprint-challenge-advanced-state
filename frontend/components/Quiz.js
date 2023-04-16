import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Quiz(props) {

    const {
      quiz: { quiz_id, answer_id }, 
      fetchQuiz, selectAnswer, initialQuizState    } = props

    useEffect(() => {
      if(initialQuizState === {})
      {
        fetchQuiz()
      }
    }, [])

const onClick = evt => {
  selectAnswer(evt.target)
  {selectAnswer === evt.target ? 'SELECTED' : 'Select'}
}

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button id="selected" onClick={onClick}>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button id="nonselected" onClick={onClick}>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" disabled={!answer_id}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st=> ({quiz: st.quiz, initialQuizState: st.initialQuizState}), {fetchQuiz: actions.fetchQuiz, selectAnswer: actions.selectAnswer, postQuiz: actions.postQuiz, postAnswer: actions.postAnswer})(Quiz)