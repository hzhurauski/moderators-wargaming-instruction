import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { withSuspense } from 'hoc/withSuspense'
import { lazy } from 'react'
import Home from 'routes/Home'
import Login from 'routes/Login'
import NotFound from 'routes/NotFound'
import {
  AuthorizedRoutesType,
  UnauthorizedRoutesType,
} from 'types/route/RouteTypes'

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
    path: '/',
    Element: Home,
    name: 'Home',
  },
  {
    path: '/home',
    Element: Home,
    name: 'Home',
  },
  {
    path: '/network/search/vk',
    Element: VkSearchSuspense,
    name: 'Vk Search',
  },
  {
    path: '/network/search/telegram',
    Element: TelegramSearchSuspense,
    name: 'Telegram Search',
  },
  {
    path: '/network/search/discord',
    Element: DiscordSearchSuspense,
    name: 'Discord Search',
  },
  {
    path: '/network/search/instagram',
    Element: InstagramSearchSuspense,
    name: 'Instagram Search',
  },
  {
    path: '/network/formalization/vk',
    Element: VkFormalizationSuspense,
    name: 'Vk Formalization',
  },
  {
    path: '*',
    Element: NotFound,
    name: 'Not Found',
  },
] as AuthorizedRoutesType[]

export const unauthorizedRoutes = [
  {
    path: '/login',
    Element: Login,
    name: 'Login',
  },
] as UnauthorizedRoutesType[]
