import { AppStateType } from 'store'

export const isAuthSelector = (state: AppStateType) => {
  return state.authPage.isAuth
}

export const userDataSelector = (state: AppStateType) => {
  return state.authPage.payload
}
