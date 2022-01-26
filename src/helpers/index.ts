import { breadcrumbData } from './../data/index'
import { appTitle } from 'data'
import { AppTitleType } from 'types/data/DataTypes'
import { RoutesType } from 'types/route/RouteTypes'

export const setTitleHelper = (location: string): string => {
  const defaultTitle = {
    title: 'Страница не найдена',
  }

  const { title } =
    (appTitle.find(({ pathname }) => pathname === location) as AppTitleType) ||
    defaultTitle

  return title
}

export const setRoutes = (
  url: string[],
  routes: RoutesType[],
  index: number
): RoutesType[] => {
  const { home, network, formalization, search } = breadcrumbData

  if (index === url.length) {
    return routes
  } else {
    switch (url[index]) {
      case '':
      case 'home':
        if (index !== 0) {
          break
        }
        routes.push(home)
        break
      case 'network':
        routes.push(network)
        break
      case 'formalization':
        routes.push(formalization)
        break
      case 'search':
        routes.push(search)
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

export const setUserComment = (
  name: string,
  message: string,
  commentsLength: number,
  date: string
) => {
  return {
    userName: name,
    message: message,
    isAdmin: false,
    id: commentsLength + 1,
    date: `${date}`,
  }
}
