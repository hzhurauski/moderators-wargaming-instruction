import { InferActionsType } from 'redux/redux'

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const initialState = {
  isAuth: false,
  currentPassword: '',
  payload: {
    name: '',
    password: '',
    rememberMe: false,
  },
}

const authReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'access is open':
      return {
        ...state,
        isAuth: action.login,
      }
    case 'current password':
      return {
        ...state,
        currentPassword: action.currentPassword,
      }
    case 'set user data':
      return {
        ...state,
        payload: action.payload,
        currentPassword: '',
      }
    default:
      return state
  }
}

export const actions = {
  authSuccess: (login: boolean) => ({ type: 'access is open', login } as const),
  setUserData: (name: string, password: string, rememberMe: boolean) =>
    ({
      type: 'set user data',
      payload: { name, password, rememberMe },
    } as const),
  changePassword: (currentPassword: string) =>
    ({ type: 'current password', currentPassword } as const),
}

export default authReducer
