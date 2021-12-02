import { Breadcrumb } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { itemRender, routes } from 'components/Breadcrumb'
import { FC, useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useLocation } from 'react-router'
import { isAuthSelector } from 'selectors/authSelectors'
import { LocationType } from 'types/Types'
import { RoutesType } from 'types/routes/RoutesTypes'
import PageRoutes from 'components/page/PageRoutes'

const PageContent: FC = () => {
  const { pathname } = useLocation<LocationType>()
  const isAuth = useSelector(isAuthSelector)

  const lastPathname = useMemo(() => {
    if (isAuth) {
      const pathname = localStorage.getItem('pathname')
      return pathname || 'home'
    } else {
      return 'login'
    }
  }, [isAuth])

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

  return (
    <Content style={{ margin: '0 16px' }}>
      {isAuth && (
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb
            itemRender={itemRender}
            routes={currentBreadCrumb(routes)}
          />
        </Breadcrumb>
      )}
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <PageRoutes />
        {lastPathname && <Redirect to={lastPathname} />}
      </div>
    </Content>
  )
}

export default PageContent
