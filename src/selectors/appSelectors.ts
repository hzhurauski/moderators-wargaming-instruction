import { AppStateType } from 'store'

export const titleSelector = (state: AppStateType): string => {
  return state.app.title
}
