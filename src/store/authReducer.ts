import { InferActionsType } from 'store'

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const initialState = {
  isAuth: false,
  name: '',
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
        name: action.name,
      }
    default:
      return state
  }
}

export const actions = {
  setIsAuth: (isAuth: boolean) => ({ type: 'IS_ACCESS', isAuth } as const),
  setUserName: (name: string) =>
    ({
      type: 'USER_DATA',
      name,
    } as const),
}

export default authReducer
