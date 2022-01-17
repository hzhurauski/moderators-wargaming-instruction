export type UserData = {
  isRememberMe: boolean
  name: string
}

export type MdType = {
  maxPhoneWidth: number
  ua: string
}

export type UaType = {
  md: MdType
  mobile: string
  os: string
  phone: string
  tablet: string
}
