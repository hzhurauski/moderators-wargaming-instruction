import { createSelector } from 'reselect'
import { AppStateType } from 'store'
import { CommentType } from 'types/comment/CommentTypes'

export const commentsSelector = createSelector(
  (state: AppStateType): CommentType[] => {
    return state.comment.comments
  },
  (comments) => comments
)

export const isSubmittingSelector = createSelector(
  (state: AppStateType): boolean => {
    return state.comment.isSubmitting
  },
  (isSubmitting) => isSubmitting
)
