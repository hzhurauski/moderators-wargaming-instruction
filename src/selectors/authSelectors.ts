import { AppStateType } from 'store'

type PayloadType = {
  name: string
  isRememberMe: boolean
}

export const isAuthSelector = (state: AppStateType): boolean => {
  return state.authPage.isAuth
}

export const userDataSelector = (state: AppStateType): PayloadType => {
  return state.authPage.payload
}
