import authReducer, { actions, InitialStateType } from 'store/authReducer'

let state: InitialStateType

beforeEach(() => {
  state = {
    isAuth: true,
    payload: {
      name: '',
      isRememberMe: false,
    },
  }
})

test('IS_ACCESS', () => {
  const NewState = authReducer(state, actions.setIsAuth(true))

  expect(NewState.isAuth).toBeTruthy()
})

test('USER_DATA', () => {
  const NewState = authReducer(state, actions.setUserData('name', true))

  expect(NewState.payload.name).toBe('name')
  expect(NewState.payload.isRememberMe).toBeTruthy()
})
