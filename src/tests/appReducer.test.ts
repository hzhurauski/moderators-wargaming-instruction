import appReducer, { actions, InitialStateType } from 'redux/appReducer'

let state: InitialStateType

beforeEach(() => {
  state = {
    title: 'Инструкция по поиску',
  }
})

test('change title', () => {
  const NewState = appReducer(state, actions.changeTitle('Title'))

  expect(NewState.title).toBe('Title')
})
