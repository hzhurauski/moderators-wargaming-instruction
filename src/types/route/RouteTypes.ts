import { FC } from 'react'

export type RoutesType = {
  path: string
  breadcrumbName: string
  children?: RoutesType[]
}

export type AuthorizedRoutesType = {
  path: string | string[]
  Element: FC
  name:
    | 'Home'
    | 'Vk Search'
    | 'Telegram Search'
    | 'Discord Search'
    | 'Instagram Search'
    | 'Vk Formalization'
    | 'Not Found'
}

export type UnauthorizedRoutesType = {
  path: string
  Element: FC
  name: 'Login'
}
