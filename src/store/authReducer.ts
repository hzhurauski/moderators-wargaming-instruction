import { InferActionsType } from 'store'

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const initialState = {
  isAuth: false,
  payload: {
    name: '',
    rememberMe: false,
  },
}

const authReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'IS_ACCESS':
      return {
        ...state,
        isAuth: action.isAuth,
      }
    case 'USER_DATA':
      return {
        ...state,
        payload: action.payload,
      }
    default:
      return state
  }
}

export const actions = {
  setIsAuth: (isAuth: boolean) => ({ type: 'IS_ACCESS', isAuth } as const),
  setUserData: (name: string, rememberMe: boolean) =>
    ({
      type: 'USER_DATA',
      payload: { name, rememberMe },
    } as const),
}

export default authReducer
