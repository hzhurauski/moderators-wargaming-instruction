import { Breadcrumb } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import { itemRender, routes } from 'components/Breadcrumb'
import Home from 'routes/Home'
import Login from 'routes/Login'
import NotFound from 'routes/NotFound'
import { withAuthRedirect } from 'hoc/withAuthRedirect'
import { withSuspense } from 'hoc/withSuspense'
import { FC, useCallback, lazy } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, useLocation, Switch } from 'react-router'
import { isAuthSelector } from 'selectors/authSelectors'
import { LocationType, RoutesType } from 'types/Types'

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

const ChatContent: FC = () => {
  const { pathname } = useLocation<LocationType>()
  const isAuth = useSelector(isAuthSelector)

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
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/home" render={() => <Home />} />
          <Route
            path="/network/search/vk"
            render={() => <VkSearchSuspense />}
          />
          <Route
            path="/network/formalization/vk"
            render={() => <VkFormalizationSuspense />}
          />
          <Route
            path="/network/search/telegram"
            render={() => <TelegramSearchSuspense />}
          />
          <Route
            path="/network/search/discord"
            render={() => <DiscordSearchSuspense />}
          />
          <Route
            path="/network/search/instagram"
            render={() => <InstagramSearchSuspense />}
          />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </div>
    </Content>
  )
}

export default ChatContent
