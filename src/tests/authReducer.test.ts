import authReducer, { actions, InitialStateType } from '../redux/authReducer'

let state: InitialStateType

beforeEach(() => {
  state = {
    isAuth: true,
    currentPassword: '',
    payload: {
      name: '',
      password: '',
      rememberMe: false,
    },
  }
})

test('is auth', () => {
  const NewState = authReducer(state, actions.authSuccess(true))

  expect(NewState.isAuth).toBeTruthy()
})

test('current password', () => {
  const NewState = authReducer(state, actions.changePassword('some password'))

  expect(NewState.currentPassword).toBe('some password')
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
