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
  // const payload = answer_id
  return { type: types.SET_SELECTED_ANSWER, payload: answer_id }
}

export function setMessage(message) { 
  // const payload = message
  return { type: types.SET_INFO_MESSAGE, payload: message }
}

export function setQuiz(quiz) { 
  const payload = quiz
  return { type: types.SET_QUIZ_INTO_STATE, payload }
}

export function inputChange({ value }) { 
  // const payload = { id, value }
  return { type: types.INPUT_CHANGE, payload: value }
}

export function resetForm() { 
  return { type: types.RESET_FORM }
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)+
    // dispatch(setMessage('Loading next quiz...'))
    // On successful GET:
        // - Dispatch an action to send the obtained quiz to its state
        // dispatch(resetForm())
        axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      console.log(res.data)
      dispatch(setQuiz(res.data))
    })
    .catch(err => {
      setError(err, dispatch)
    })
  }
}

export function postAnswer({ question_text, true_answer_text, false_answer_text }) {
  return function (dispatch) {
  //   // On successful POST:
  //   // - Dispatch an action to reset the selected answer state
  //   // - Dispatch an action to set the server message to state
  //   // - Dispatch the fetching of the next quiz

    // axios.post('http://localhost:9000/api/quiz/new', { question_text, true_answer_text, false_answer_text })
    axios.post(
      'http://localhost:9000/api/quiz/new', 
      { question_text, true_answer_text, false_answer_text }
    )
    .then(res => {
      dispatch(selectAnswer(""))
      dispatch(setMessage({
        main: `${res.data.verdict}`,
        code: res.data.is_correct ? 'green' : 'red',
      }))
      dispatch(fetchQuiz())
    })
    .catch(err => {
    setError(err, dispatch)
    })
  }
}
export function postQuiz({ quiz_id, answer_id }) {
  return function (dispatch) {
    axios.post(
      'http://localhost:9000/api/quiz/answer', 
      { quiz_id, answer_id }
      )
    .then(res => {
      dispatch(setMessage({
        main: `${res.data.verdict}`,
        code: res.data.is_correct ? 'green' : 'red',
      }))
      // dispatch(resetForm())
      dispatch(fetchQuiz())
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
