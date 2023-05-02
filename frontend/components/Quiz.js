import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'


export function Quiz(props) {

    const {
      quiz: { question, answer_id }, 
      fetchQuiz, 
      postAnswer,
      selectAnswer
    } = props


    useEffect(() => {
      if (!question) fetchQuiz()
    }, [])


const onAnswer = () => {

  const { question_id } = question
  postAnswer({ question_id, answer_id })
}

  return (
    
    <div id="wrapper">
      {
          question ? (
          <>
            {<h2>{question.question}</h2>}
              <div id="quizAnswers">
              {
                  question.answers.map(opt => (
                  <div
                    key={opt.answer_id}
                    className={`answer${answer_id === opt.answer_id ? ' selected' : ''}`}
                    onClick={() => selectAnswer(opt.answer_id)}
                  >
                   <div className="answer">{opt.text}</div>
                    <button>
                      {answer_id === opt.answer_id ? 'SELECTED' : 'Select'}
                    </button>
                  </div>
                ))
              }

                <button id="submitAnswerBtn" onClick={onAnswer} disabled={!answer_id}>
                Submit answer
              </button>
             
            </div>
          </>
        ) : 'Loading next quiz...'
      }
    </div>

  )
}

export default connect(st=> ({quiz: st.quiz, question: st.question}), {fetchQuiz: actions.fetchQuiz, selectAnswer: actions.selectAnswer, postAnswer: actions.postAnswer})(Quiz)