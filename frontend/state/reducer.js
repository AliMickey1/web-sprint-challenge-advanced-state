// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as types from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_CLOCKWISE:
      return state + 1
    case types.MOVE_COUNTERCLOCKWISE:
      return state - 1
    default:
    return state
  }
}

const initialQuizState = {}
function quiz(state = initialQuizState, action) {
  switch (action.type){
    case types.RESET_FORM:
      return initialQuizState
    case types.SET_QUIZ_INTO_STATE:
      return { answer_id: null, question_id: action.payload }
    case types.SET_SELECTED_ANSWER:
      return { ...state, answer_id: action.payload }
  default:    
    return state
  }
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case types.RESET_FORM:
      return initialSelectedAnswerState
      case types.SET_SELECTED_ANSWER:
        return { ...state, answer_id: action.payload }
    default:
  return state
  }
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case types.RESET_FORM:
      return initialMessageState
    case types.SET_INFO_MESSAGE:
      const payload = action.payload
      return payload
    default:
   return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case types.RESET_FORM:
      return action.payload
    case types.SET_QUIZ_INTO_STATE:
      return action.payload
    case types.INPUT_CHANGE: {
      // const { name, value } = action.payload
      return { ...state, value: action.payload}
    }
    

  default:
    return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
