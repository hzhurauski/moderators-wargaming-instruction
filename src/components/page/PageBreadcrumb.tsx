import { Breadcrumb } from 'antd'
import { itemRender, routes } from 'components/Breadcrumb'
import { useCallback, useMemo } from 'react'
import { useLocation } from 'react-router'
import { RoutesType } from 'types/routes/RoutesTypes'
import { LocationType } from 'types/Types'

const PageBreadcrumb = () => {
  const { pathname } = useLocation<LocationType>()

  const currentBreadCrumb = useCallback(
    (routes: Array<RoutesType>) => {
      const URL = pathname.split('/')
      const currentNetwork = [
        ...routes,
        {
          path: pathname,
          breadcrumbName: pathname.replace('/', ''),
        },
      ]
      switch (pathname) {
        case '/':
        case '/home':
        case '/login':
          return [...routes]
        case '/network/search/vk':
        case '/network/search/telegram':
        case '/network/search/discord':
        case '/network/search/instagram':
        case '/network/formalization/vk':
          return [
            ...routes,
            { path: URL[2], breadcrumbName: URL[2].replace('/', '') },
            { path: URL[3], breadcrumbName: URL[3].replace('/', '') },
          ]
      }
      return [...currentNetwork]
    },
    [pathname]
  )

  return useMemo(() => {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb
          itemRender={itemRender}
          routes={currentBreadCrumb(routes)}
        />
      </Breadcrumb>
    )
  }, [itemRender, currentBreadCrumb, routes])
}

export default PageBreadcrumb
