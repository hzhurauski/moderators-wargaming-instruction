import { AppStateType } from 'redux/redux'

export const setCommentsSelector = (state: AppStateType) => {
  return state.comment.comments
}

export const currentMessageSelector = (state: AppStateType) => {
  return state.comment.message
}

export const commentSubmittingSelector = (state: AppStateType) => {
  return state.comment.isSubmitting
}
