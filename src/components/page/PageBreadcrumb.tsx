import { Breadcrumb } from 'antd'
import { Route } from 'antd/lib/breadcrumb/Breadcrumb'
import { itemRender } from 'components/Breadcrumb'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import { RoutesType } from 'types/routes/RoutesType'
import { LocationType } from 'types/Types'

const PageBreadcrumb: FC = () => {
  const [breadCrumbs, setBreadCrumbs] = useState<RoutesType[]>([])
  const { pathname } = useLocation<LocationType>()

  const changeBreadCrumb = useCallback((): RoutesType[] => {
    const url = pathname.split('/')
    const routes: RoutesType[] = []
    let index = 0

    const setRoutes = (): RoutesType[] => {
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
      return setRoutes()
    }

    return setRoutes()
  }, [pathname])

  useEffect(() => {
    setBreadCrumbs(changeBreadCrumb() as RoutesType[])
  }, [changeBreadCrumb])

  return useMemo(() => {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb itemRender={itemRender} routes={breadCrumbs as Route[]} />
      </Breadcrumb>
    )
  }, [breadCrumbs])
}

export default PageBreadcrumb
