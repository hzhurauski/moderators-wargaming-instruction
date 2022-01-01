import { appTitle } from 'data'
import { AppTitleType } from 'types/data/DataTypes'
import { RoutesType } from 'types/route/RouteTypes'

export const setTitleHelper = (pathname: string): string => {
  const defaultTitle = {
    title: 'Страница не найдена',
  }

  const { title } =
    (appTitle.find((t) => t.pathname === pathname) as AppTitleType) ||
    defaultTitle

  return title
}

export const setRoutes = (
  url: string[],
  routes: RoutesType[],
  index: number
): RoutesType[] => {
  if (index === url.length) {
    return routes
  } else {
    switch (url[index]) {
      case '':
      case '/home':
        if (index !== 0) {
          break
        }
        routes.push({
          path: '/',
          breadcrumbName: 'home',
          children: [
            {
              path: '/network/search/vk',
              breadcrumbName: 'Networks',
            },
          ],
        })
        break
      case 'network':
        routes.push({
          path: '/',
          breadcrumbName: 'network',
          children: [
            {
              path: '/network/search/vk',
              breadcrumbName: 'Search',
            },
            {
              path: '/network/formalization/vk',
              breadcrumbName: 'Formalization',
            },
          ],
        })
        break
      case 'formalization':
        routes.push({
          path: '/network/formalization/vk',
          breadcrumbName: 'formalization',
          children: [
            {
              path: '/network/formalization/vk',
              breadcrumbName: 'Vk',
            },
          ],
        })
        break
      case 'search':
        routes.push({
          path: '/network/search/vk',
          breadcrumbName: 'search',
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
        })
        break
      case 'vk':
      case 'telegram':
      case 'discord':
      case 'instagram':
        routes.push({
          path: url[index],
          breadcrumbName: url[index],
        })
        break
    }
  }

  index += 1
  return setRoutes(url, routes, index)
}
