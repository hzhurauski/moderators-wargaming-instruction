import { ResultCodesEnum } from "../DAL/API"


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