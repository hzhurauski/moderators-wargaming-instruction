import { Link } from 'react-router-dom'
import { RoutesType } from 'types/Types'

export const routes = [
  {
    path: '/',
    breadcrumbName: 'home',
  },
  {
    path: '/',
    breadcrumbName: 'networks',
    children: [
      {
        path: '/network/search/vk',
        breadcrumbName: 'Vk',
      },
      {
        path: '/network/search/telegram',
        breadcrumbName: 'Telegram',
      },
      {
        path: '/network/search/discord',
        breadcrumbName: 'Discord',
      },
      {
        path: '/network/search/instagram',
        breadcrumbName: 'Instagram',
      },
    ],
  },
]

export const itemRender = (
  route: RoutesType,
  params: any,
  routes: Array<RoutesType>,
  paths: any
) => {
  const last = routes.indexOf(route) === routes.length - 1
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  )
}
