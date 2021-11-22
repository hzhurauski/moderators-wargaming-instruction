import { commentAPI, ResultCodesEnum } from 'service/API'
import { CommentType } from 'types/Types'
import { BaseThunkType, InferActionsType } from 'store'

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const initialState = {
  isSubmitting: false,
  message: '',
  comments: [] as Array<CommentType>,
}

const commentReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'COMMENTS':
      return {
        ...state,
        comments: action.comments,
      }
    case 'COMMENT':
      return {
        ...state,
        comments: [...state.comments, { ...action.comment }],
        message: '',
      }
    case 'IS_SUBMITTING':
      return {
        ...state,
        isSubmitting: action.isSubmitting,
      }
    default:
      return state
  }
}

export const actions = {
  setComments: (comments: Array<CommentType>) =>
    ({ type: 'COMMENTS', comments } as const),
  setComment: (comment: CommentType) => ({ type: 'COMMENT', comment } as const),
  setIsSubmitting: (isSubmitting: boolean) =>
    ({ type: 'IS_SUBMITTING', isSubmitting } as const),
}

export const getCommentsThunk = (): ThunkType => async (dispatch) => {
  const response = await commentAPI.getComments()
  if (response.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setComments(response.comments))
  }
}

export default commentReducer