import { createSelector } from 'reselect'
import { AppStateType } from 'store'

type PayloadType = {
  name: string
  isRememberMe: boolean
}

export const isAuthSelector = createSelector(
  (state: AppStateType): boolean => {
    return state.authPage.isAuth
  },
  (isAuth) => isAuth
)

export const userDataSelector = createSelector(
  (state: AppStateType): PayloadType => {
    return state.authPage.payload
  },
  (payload) => payload
)
