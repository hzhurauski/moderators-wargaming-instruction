import { InferActionsType } from 'store'

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const initialState = {
  title: 'Инструкция по поиску',
}

const appReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'TITLE':
      return {
        ...state,
        title: action.title,
      }
    default:
      return state
  }
}

export const actions = {
  setTitle: (title: string) => ({ type: 'TITLE', title } as const),
}

export default appReducer
