import { createSelector } from 'reselect'
import { AppStateType } from 'store'

export const titleSelector = createSelector(
  (state: AppStateType): string => {
    return state.app.title
  },
  (title) => title
)
