import { createSelector } from 'reselect'
import { AppStateType } from 'store'

export const isAuthSelector = createSelector(
  (state: AppStateType): boolean => {
    return state.authPage.isAuth
  },
  (isAuth) => isAuth
)

export const userNameSelector = createSelector(
  (state: AppStateType): string => {
    return state.authPage.name
  },
  (name) => name
)
