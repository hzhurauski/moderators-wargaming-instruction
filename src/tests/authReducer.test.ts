import authReducer, { actions, InitialStateType } from 'store/authReducer'

let state: InitialStateType

beforeEach(() => {
  state = {
    isAuth: true,
    password: '',
    payload: {
      name: '',
      password: '',
      rememberMe: false,
    },
  }
})

test('is auth', () => {
  const NewState = authReducer(state, actions.setIsAuth(true))

  expect(NewState.isAuth).toBeTruthy()
})

test('current password', () => {
  const NewState = authReducer(state, actions.setPassword('some password'))

  expect(NewState.password).toBe('some password')
})

test('get user data', () => {
  const NewState = authReducer(
    state,
    actions.setUserData('name', 'password', true)
  )

  expect(NewState.payload.name).toBe('name')
  expect(NewState.payload.password).toBe('password')
  expect(NewState.payload.rememberMe).toBeTruthy()
})
