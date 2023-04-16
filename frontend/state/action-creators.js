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
  const payload = answer_id
  return { type: types.SET_SELECTED_ANSWER, payload }
}

export function setMessage(message) { 
  const payload = message
  return { type: types.SET_INFO_MESSAGE, payload }
}

export function setQuiz(quiz) { 
  const payload = quiz
  return { type: types.SET_QUIZ_INTO_STATE, payload }
}

export function inputChange({ id, value }) { 
  const payload = { id, value }
  return { type: types.INPUT_CHANGE, payload }
}

export function resetForm() { 
  return { type: types.RESET_FORM }
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)+
    dispatch(setMessage('Loading next quiz...'))
    // On successful GET:
        // - Dispatch an action to send the obtained quiz to its state
    axios.get('http://localhost:9000/api/quiz/next')
    .then(res => {
      dispatch(setQuiz(res.data))
    })

  }
}
export function postAnswer({ question_text, true_answer_text, false_answer_text }) {
  return function (dispatch) {
  //   // On successful POST:
  //   // - Dispatch an action to reset the selected answer state
  //   // - Dispatch an action to set the server message to state
  //   // - Dispatch the fetching of the next quiz
    axios.post('http://localhost:9000/api/quiz/new', { question_text, true_answer_text, false_answer_text })
    .then(res => {
      dispatch(selectAnswer())
      dispatch(setMessage('Loading next quiz...'))
      dispatch(fetchQuiz())
    })

  }
}
export function postQuiz({quiz_id, answer_id }) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    axios.post('http://localhost:9000/api/quiz/answer', { quiz_id, answer_id })
    .then(res => {
      dispatch()
      dispatch(resetForm())
    })
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
