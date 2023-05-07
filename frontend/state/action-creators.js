// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types'
import axios from 'axios'


export function moveClockwise() { 
  return { type: types.MOVE_CLOCKWISE }
}

export function moveCounterClockwise() { 
  return { type: types.MOVE_COUNTERCLOCKWISE }
}

export function selectAnswer(answer_id) { 
  return { type: types.SET_SELECTED_ANSWER, payload: answer_id }
}

export function setMessage({main}) { 
  window.scrollTo(0, 0)
  const payload = { main}
  return { type: types.SET_INFO_MESSAGE, payload }
}

export function setQuiz(quiz) { 
  const payload = quiz
  return { type: types.SET_QUIZ_INTO_STATE, payload }
}

export function inputChange({ name, value }) { 
  const payload = { name, value }
  return { type: types.INPUT_CHANGE, payload }
}

export function resetForm() { 
  return { type: types.RESET_FORM }
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      dispatch(setQuiz(res.data))
    })
    .catch(err => {
      setError(err, dispatch)
    })
  }
}

export function postAnswer({ question_id, answer_id }) {
  return function (dispatch) {
  axios.post(
    'http://localhost:9000/api/quiz/answer', 
    { question_id, answer_id }
    )
  .then(res => {
    dispatch(setMessage({
      main: `${res.data.message}`
    }))
    dispatch(fetchQuiz())
  })
  .catch(err => {
    setError(err, dispatch)
    })

  }
}


export function postQuiz({question_text, true_answer_text, false_answer_text}) {
  return function (dispatch) {
     
    console.log(`question_text: ${question_text}, true_answer_text: ${true_answer_text}, false_answer_text: ${false_answer_text}`)
      axios.post(
        'http://localhost:9000/api/quiz/new',       
       { question_text, true_answer_text, false_answer_text }
      )
      .then(res => {
        // console.log(`Congrats: "${res.data.question}" is a great question!`)
        dispatch(setMessage({ 
          main: `Congrats: "${res.data.question}" is a great question!` 
        }))
        // dispatch(resetForm())
      })
      .catch(err => {
      setError(err, dispatch)
      })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
function setError(err, dispatch) {
  const errToDisplay = err.response ? err.response.data.message : err.message
  dispatch(setMessage({ main: errToDisplay, code: 'red' }))
}

