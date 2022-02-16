import authReducer, { actions, InitialStateType } from 'store/authReducer'

let state: InitialStateType

beforeEach(() => {
  state = {
    isAuth: true,
    name: '',
  }
})

test('IS_ACCESS', () => {
  const NewState = authReducer(state, actions.setIsAuth(true))

  expect(NewState.isAuth).toBeTruthy()
})

test('USER_DATA', () => {
  const NewState = authReducer(state, actions.setUserName('name'))

  expect(NewState.name).toBe('name')
})
