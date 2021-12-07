import { AppStateType } from 'store'

export type MdType = {
  maxPhoneWidth: number
  ua: string
}

export type UaType = {
  md: MdType
  mobile: null | string
  os: null | string
  phone: null | string
  tablet: null | string
}

export type LocationType = {
  pathname: string
  search: string
  hash: string
  state: AppStateType
  key?: string
}

export type UserData = {
  isRememberMe: boolean
  name: string
}
