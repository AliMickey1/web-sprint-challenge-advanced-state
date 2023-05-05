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

// newQuestion, newTrueAnswer, newFalseAnswer

export function postQuiz({question_text, true_answer_text, false_answer_text}) {
  return function (dispatch) {
      // let question_text = null
      // let true_answer_text = null
      // let false_answer_text = null
      // question_text = newQuestion
      // true_answer_text = newTrueAnswer
      // false_answer_text = newFalseAnswer
    // console.log(`newQuestion: ${newQuestion}, newTrueAnswer: ${newTrueAnswer}, newFalseAnswer: ${newFalseAnswer}`)
    console.log(`question_text: ${question_text}, true_answer_text: ${true_answer_text}, false_answer_text: ${false_answer_text}`)
      axios.post(
        'http://localhost:9000/api/quiz/new',       
        // ({newQuestion, newTrueAnswer, newFalseAnswer})
       ({ question_text, true_answer_text, false_answer_text })
      )
      .then(res => {
        dispatch(setMessage({
          main: `${res.data.message}`
        }))
        dispatch(resetForm())
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
