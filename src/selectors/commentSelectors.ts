import { AppStateType } from 'store'
import { CommentType } from 'types/comment/CommentTypes'

export const commentsSelector = (state: AppStateType): CommentType[] => {
  return state.comment.comments
}

export const isSubmittingSelector = (state: AppStateType): boolean => {
  return state.comment.isSubmitting
}
