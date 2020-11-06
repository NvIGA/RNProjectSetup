import {TEST} from '../types'

export const simpleAction = (data) => {
  return {
    type: TEST,
    payload: data,
  }
}

// export const simpleActionWithAsyncState = () => {
//   return async (dispatch, getState) => {
//     const {testList} = getState().profileReducer
//     const data = await fetch('some api')
//     dispatch({
//       type: TEST,
//       payload: [...data, ...testList],
//     })
//   }
// }
