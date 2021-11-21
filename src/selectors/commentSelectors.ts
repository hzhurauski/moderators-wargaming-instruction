import { AppStateType } from 'store'

export const commentsSelector = (state: AppStateType) => {
  return state.comment.comments
}

export const isSubmittingSelector = (state: AppStateType) => {
  return state.comment.isSubmitting
}
