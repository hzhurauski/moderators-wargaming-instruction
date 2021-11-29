import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { withSuspense } from 'hoc/withSuspense'
import { lazy } from 'react'
import Home from 'routes/Home'
import Login from 'routes/Login'
import NotFound from 'routes/NotFound'
import {
  AuthorizedRoutesType,
  UnauthorizedRoutesType,
} from 'types/routes/RoutesTypes'

const Suspense = (assignment: string, network: string) => {
  return withAuthRedirect(
    withSuspense(lazy(() => import(`routes/networks/${assignment}/${network}`)))
  )
}

const VkSearchSuspense = Suspense('search', 'Vk')
const TelegramSearchSuspense = Suspense('search', 'Telegram')
const DiscordSearchSuspense = Suspense('search', 'Discord')
const InstagramSearchSuspense = Suspense('search', 'Instagram')

const VkFormalizationSuspense = Suspense('formalization', 'Vk')

export const authorizedRoutes = [
  {
    path: ['/', '/home'],
    component: Home,
    name: 'Home',
    exact: true,
  },
  {
    path: '/network/search/vk',
    component: VkSearchSuspense,
    name: 'Vk Search',
    exact: false,
  },
  {
    path: '/network/search/telegram',
    component: TelegramSearchSuspense,
    name: 'Telegram Search',
    exact: false,
  },
  {
    path: '/network/search/discord',
    component: DiscordSearchSuspense,
    name: 'Discord Search',
    exact: false,
  },
  {
    path: '/network/search/instagram',
    component: InstagramSearchSuspense,
    name: 'Instagram Search',
    exact: false,
  },
  {
    path: '/network/formalization/vk',
    component: VkFormalizationSuspense,
    name: 'Vk Formalization',
    exact: false,
  },
  {
    path: '*',
    component: NotFound,
    name: 'Not Found',
    exact: false,
  },
] as AuthorizedRoutesType[]

export const unauthorizedRoutes = [
  {
    path: '/login',
    component: Login,
    name: 'Login',
    exact: false,
  },
] as UnauthorizedRoutesType[]
