import { InferActionsType } from './redux'

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

let initialState = {
  title: 'Инструкция по поиску',
}

const appReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'title':
      return {
        ...state,
        title: action.title,
      }
    default:
      return state
  }
}

export const actions = {
  changeTitle: (title: string) => ({ type: 'title', title } as const),
}

export default appReducer
