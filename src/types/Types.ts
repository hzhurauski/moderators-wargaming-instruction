import { ResultCodesEnum } from 'service/API'
import { AppStateType } from 'store'

export type CommentType = {
  name: string
  message: string
  isAdmin: boolean
  id?: number
  date: string
}

export type RoutesType = {
  path: string
  breadcrumbName: string
}

export type ResponseType<M = []> = {
  comments: M
  resultCode: ResultCodesEnum
}

export type UaType = {
  md: MdType
  mobile: null | string
  os: null | string
  phone: null | string
  tablet: null | string
}

export type MdType = {
  maxPhoneWidth: number
  ua: string
}

export type LocationType = {
  pathname: string
  search: string
  hash: string
  state: AppStateType
  key?: string
}

export type AppTitleType = {
  pathname?: string
  title: string
}

export type UserData = {
  isRememberMe: boolean
  name: string
}
