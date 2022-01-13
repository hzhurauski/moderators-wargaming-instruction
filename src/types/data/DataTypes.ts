import { FC } from 'react'
import { RoutesType } from 'types/route/RouteTypes'

export type AppTitleType = {
  pathname?: string
  title: string
}

export type SearchNetworksType = {
  link: string
  socialNetwork: 'Vk' | 'Telegram' | 'Discord' | 'Instagram'
}

export type FormalizationNetworksType = {
  link: string
  socialNetwork: 'Vk'
}

export type WargamingProjectsType = {
  href: string
  projectName:
    | 'World of Tanks'
    | 'World of Warships'
    | 'World of Warships Blitz'
    | 'World of Warplanes'
    | 'World of Tanks Blitz'
    | 'World of Tanks (Xbox/PS5)'
    | 'Master of Orion'
}

export type MyContactsType = {
  href: string
  socialNetwork: 'Telegram' | 'Vk' | 'Facebook'
}

export type AuthorizedMenuItemsType = {
  link: string
  Icon: FC
  title: string
}

export type AuthorizedSubMenuItemsType = {
  Icon: FC
  title: 'Social networks' | 'We project' | 'My contacts'
  Children: FC
}

export type TableDataType = {
  main: string
  rare: string
  product: string
  project: string
}

type BreadcrumbData = 'home' | 'network' | 'formalization' | 'search'

export type BreadcrumbDataType = Record<BreadcrumbData, RoutesType>
