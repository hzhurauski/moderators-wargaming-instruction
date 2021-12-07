export type RoutesType = {
  path: string
  breadcrumbName: string
  children?: RoutesType[]
}

export type AuthorizedRoutesType = {
  path: string | string[]
  component: () => React.ReactElement
  name:
    | 'Home'
    | 'Vk Search'
    | 'Telegram Search'
    | 'Discord Search'
    | 'Instagram Search'
    | 'Vk Formalization'
    | 'Not Found'
  exact: boolean
}

export type UnauthorizedRoutesType = {
  path: string
  component: () => React.ReactElement
  name: 'Login'
  exact: boolean
}
