import { AppStateType } from '../redux/redux'

export const authSuccessSelector = (state: AppStateType) => {
  return state.authPage.isAuth
}

export const setUserDataSelector = (state: AppStateType) => {
  return state.authPage.payload
}

export const changePasswordSelector = (state: AppStateType) => {
  return state.authPage.currentPassword
}
