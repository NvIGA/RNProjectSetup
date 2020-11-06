import {TEST} from '../types'

const exampleStore = {
  testData: ['joke'],
}

export const exampleReducer = (state = exampleStore, action) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        testData: [...state.testData, 'ok its funny'],
        // testData: [...state.testData, action.payload],
      }

    default:
      return state
  }
}
