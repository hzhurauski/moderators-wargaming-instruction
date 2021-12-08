import appReducer, { actions, InitialStateType } from 'store/appReducer'

let state: InitialStateType

beforeEach(() => {
  state = {
    title: 'Инструкция по поиску',
  }
})

test('TITLE', () => {
  const NewState = appReducer(state, actions.setTitle('title'))

  expect(NewState.title).toBe('title')
})
