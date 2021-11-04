import { commentAPI, ResultCodesEnum } from '../DAL/API'
import { CommentType } from '../types/Types'
import { BaseThunkType, InferActionsType } from './redux'

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
    case 'set comments':
      return {
        ...state,
        comments: action.comments,
      }
    case 'current message':
      return {
        ...state,
        message: action.message,
      }
    case 'create new comment':
      return {
        ...state,
        comments: [...state.comments, { ...action.comment }],
        message: '',
      }
    case 'submitting':
      return {
        ...state,
        isSubmitting: action.submitting,
      }
    default:
      return state
  }
}

export const actions = {
  setComments: (comments: Array<CommentType>) =>
    ({ type: 'set comments', comments } as const),
  createNewComment: (comment: CommentType) =>
    ({ type: 'create new comment', comment } as const),
  changeMessage: (message: string) =>
    ({ type: 'current message', message } as const),
  commentSubmitting: (submitting: boolean) =>
    ({ type: 'submitting', submitting } as const),
}

export const TextareaRequestThunk = (): ThunkType => async (dispatch) => {
  const response = await commentAPI.setComments()
  if (response.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setComments(response.comments))
  }
}

export default commentReducer
