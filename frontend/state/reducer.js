// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import * as types from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_CLOCKWISE:
      if (state === 5)
      {
        state = 0
        return state
      }
      else
      {
        return state + 1
      }

    case types.MOVE_COUNTERCLOCKWISE:
      if (state === 0)
      {
        state = 5
      }
      else{
        return state - 1
      }
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
      return { question: action.payload, answer_id: null }
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

const initialMessageState = {main:''}
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case types.RESET_FORM:
      return initialMessageState
    case types.SET_INFO_MESSAGE:
      return action.payload
    default:
   return state
  }
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
  // question_text: '', 
  // true_answer_text: '',
  // false_answer_text: '',
}
function form(state = initialFormState, action) {
  switch(action.type) {
    case types.RESET_FORM:
      return initialFormState      
    case types.INPUT_CHANGE: {
      const { name, value } = action.payload
      if (Object.keys(state).includes(name)) {
        return { ...state, [name]: value }
      }
      const [optionName, optionKey] = name.split('-')
      const options = state.options
      if (optionKey && Object.keys(options).includes(optionKey)) {
        const option = state.options[optionKey]
        return {
          ...state,
          options: {
            ...options,
            [optionKey]: { ...option, [optionName]: value },
          }
        }
      }
    }
  default:
    return state
  }
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
