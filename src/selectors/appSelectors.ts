import { AppStateType } from 'store'

export const titleSelector = (state: AppStateType) => {
  return state.app.title
}
