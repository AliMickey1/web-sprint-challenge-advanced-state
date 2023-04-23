import React, {  useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

export function Quiz(props) {

  const [ active, setActive ] = useState(false)
    const {
      quiz: { question_id, answer_id, question }, 
      fetchQuiz, 
      postAnswer,
      selectAnswer,  
    } = props


    useEffect(() => {
      if (!question) fetchQuiz()
    }, [])

const onClick = evt => {
  setActive(current => !current)
  const className=`answer ${active == evt.target.value && 'active'}`
  selectAnswer === evt.target ? 'SELECTED' : 'Select'
  console.log(`selectAnswer = ${selectAnswer}`)
}

const onAnswer = () => {
  const { question_id } = question
  postAnswer({ question_id, option_id,  })
}

  return (

   
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              {/* <div className="answer selected"> */}
              <div className={active ? 'answer' : 'answer selected'}>
                A function
                <button onClick={onClick}>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button onClick={onClick}>
                  Select
                  </button>
              </div>
            </div>

            <button onClick={onAnswer} id="submitAnswerBtn" disabled={!answer_id}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
     </div>
  )
}

export default connect(st=> ({quiz: st.quiz}), {fetchQuiz: actions.fetchQuiz, selectAnswer: actions.selectAnswer, postQuiz: actions.postQuiz, postAnswer: actions.postAnswer})(Quiz)