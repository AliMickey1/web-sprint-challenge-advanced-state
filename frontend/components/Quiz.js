import React, {  useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'


export function Quiz(props) {

  const [ active, setActive ] = useState(false)
    const {
      quiz: { question_id, question, answer_id }, 
      fetchQuiz, 
      postQuiz,
      selectAnswer
    } = props


    useEffect(() => {
      if (!question) fetchQuiz()
    }, [])


const onAnswer = () => {

  // const { question_id } = quiz_question
  // for (let key of question_id) {
  //   console.log(question_id(key))
  // }

  // const quiz_id = question_id["question_id"]


  
  // JSON.stringify(question_id);
  // console.log(`quiz_id is ${quiz_id} & answer_id is ${answer_id}`)
  postQuiz({ question_id, answer_id })
}

  return (
    
    <div id="quizContainer">
      {
        question_id ? (
          <>
            {<h2>{question}</h2>}
            <div className="quiz">
              <div className="question text">
                {question_id.question}
              </div>
              {
                question_id.answers.map(opt => (
                  <div
                    key={opt.answer_id}
                    className={`answer${answer_id === opt.answer_id ? ' selected' : ''}`}
                    onClick={() => selectAnswer(opt.answer_id)}
                  >
                   <div className="md">{opt.text}</div>
                    <button className="wide">
                      {answer_id === opt.answer_id ? 'SELECTED' : 'Select'}
                    </button>
                  </div>
                ))
              }
            </div>
            <div className="button-group">
              <button className="jumbo-button" onClick={onAnswer} disabled={!answer_id}>
                Submit answer
              </button>
             
            </div>
          </>
        ) : 'Loading next quiz...'
      }
    </div>

  )
}

export default connect(st=> ({quiz: st.quiz, question: st.question}), {fetchQuiz: actions.fetchQuiz, selectAnswer: actions.selectAnswer, postQuiz: actions.postQuiz})(Quiz)