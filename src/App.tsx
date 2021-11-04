import React, { Profiler, useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './redux/redux'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Link,
  useLocation,
} from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  CheckOutlined,
  CloseOutlined,
  HomeOutlined,
  LockOutlined,
  SendOutlined,
  InstagramOutlined,
  FacebookOutlined,
  SearchOutlined,
  MenuOutlined,
  GithubOutlined,
  SettingOutlined,
  EyeOutlined,
  TranslationOutlined,
  FileProtectOutlined,
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import Home from './components/Home'
import Login from './components/Login/Login'
import NotFound from './components/NotFound'
import { withSuspense } from './HOC/withSuspense'
import { withAuthRedirect } from './HOC/withAuthRedirect'
import { itemRender, routes } from './components/Breadcrumb'
import Comments from './components/Comment/Comments'
//@ts-ignore
import { withUserAgent } from 'react-useragent'
import CatchError from './components/catchError'
import { changeTitleSelector } from './selectors/appSelectors'
import { authSuccessSelector } from './selectors/authSelectors'
import { RoutesType, UaType } from './types/Types'
import { actions as actionsApp } from './redux/appReducer'
import { actions as actionsAuth } from './redux/authReducer'
import { TextareaRequestThunk } from './redux/commentReducer'

type LocationType = {
  pathname: string
  search: string
  hash: string
  state: unknown
  key?: string
}

type PropsType = {
  ua: UaType
}

const currentIcon = (location: LocationType) => {
  switch (location.pathname) {
    /* case '/network/search/vk':
      return <SendOutlined /> */
    case '/network/search/telegram':
      return <SendOutlined />
    /* case '/network/search/discord':
      return <SendOutlined /> */
    case '/network/search/instagram':
      return <InstagramOutlined />
    default:
      return <FacebookOutlined />
  }
}

const logProfiler = (
  id: string,
  phase: string,
  actualTime: number,
  baseTime: number,
  startTime: number,
  commitTime: number
) => {
  /* console.log(id)
  console.log(phase)
  console.log(actualTime)
  console.log(baseTime)
  console.log(startTime)
  console.log(commitTime) */
}

const Suspense = (assignment: string, network: string) => {
  return withAuthRedirect(
    withSuspense(
      React.lazy(() => import(`./components/networks/${assignment}/${network}`))
    )
  )
}

const VkSearchSuspense = Suspense('search', 'Vk')
const TelegramSearchSuspense = Suspense('search', 'Telegram')
const DiscordSearchSuspense = Suspense('search', 'Discord')
const InstagramSearchSuspense = Suspense('search', 'Instagram')
/* const OkSearchSuspense = Suspense('search', 'Ok')
const FacebookSearchSuspense = Suspense('search', 'Facebook')
const YandexSearchSuspense = Suspense('search', 'Yandex')
const TikTokSearchSuspense = Suspense('search', 'TikTok') */

const VkFormalizationSuspense = Suspense('formalization', 'Vk')

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const App: React.FC<PropsType> = React.memo(({ ua }) => {
  const dispatch = useDispatch()
  const location = useLocation<LocationType>()
  const isAuth = useSelector(authSuccessSelector)
  const title = useSelector(changeTitleSelector)
  const [collapsed, setCollapsed] = useState(ua.mobile ? true : false)
  const [englishLanguage, setEnglishLanguage] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed)
  }

  const currentBreadCrumb = (routes: Array<RoutesType>) => {
    const URL = location.pathname.split('/')
    const currentNetwork = [
      ...routes,
      {
        path: location.pathname,
        breadcrumbName: location.pathname.replace('/', ''),
      },
    ]
    switch (location.pathname) {
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
  }

  useEffect(() => {
    //@ts-ignore
    if (JSON.parse(localStorage.getItem('rememberMe')) === true) {
      dispatch(actionsAuth.authSuccess(true))
    }
    const name = localStorage.getItem('name')
    if (name) {
      dispatch(actionsAuth.setUserData(name, '', false))
    }
  }, [dispatch])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    dispatch(TextareaRequestThunk())
  }, [dispatch])

  useEffect(() => {
    switch (location.pathname) {
      case '/home':
        dispatch(actionsApp.changeTitle('Введение'))
        break
      case '/login':
        dispatch(actionsApp.changeTitle('Aутентификация'))
        break
      case '/network/search/vk':
        dispatch(actionsApp.changeTitle('Поиск - Vk'))
        break
      case '/network/search/telegram':
        dispatch(actionsApp.changeTitle('Поиск - Telegram'))
        break
      case '/network/search/discord':
        dispatch(actionsApp.changeTitle('Поиск - Discord'))
        break
      case '/network/search/instagram':
        dispatch(actionsApp.changeTitle('Поиск - Instagram'))
        break
      case '/network/formalization/vk':
        dispatch(actionsApp.changeTitle('Оформление - Vk'))
        break
      default:
        dispatch(actionsApp.changeTitle('Страница не найдена'))
    }
  }, [location, dispatch])

  useEffect(() => {
    document.title = title
  }, [title])

  const handleChange = () => {
    localStorage.removeItem('rememberMe')
    dispatch(actionsAuth.authSuccess(false))
  }

  return (
    <Layout style={{ minHeight: '100vh' /* , minWidth: '690px' */ /* 1060 */ }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['/login']}
          selectedKeys={[location.pathname]}
          mode="inline"
        >
          {isAuth ? (
            <Menu.Item
              key="/login"
              icon={<CloseOutlined />}
              onClick={handleChange}
            >
              <Link to="/login">Выйти</Link>
            </Menu.Item>
          ) : (
            <Menu.Item key="/login" icon={<LockOutlined />}>
              <Link to="/login">Аутентификация</Link>
            </Menu.Item>
          )}
          {isAuth && (
            <Menu.Item key="/home" icon={<HomeOutlined />}>
              <Link to="/home">Введение</Link>
            </Menu.Item>
          )}
          {isAuth && (
            <SubMenu
              key="sub1"
              icon={currentIcon(location)}
              title="Социальные сети"
            >
              <SubMenu key="sub2" icon={<SearchOutlined />} title="Поиск">
                <Menu.Item key="/network/search/vk">
                  <Link to="/network/search/vk">Vk</Link>
                </Menu.Item>
                <Menu.Item key="/network/search/telegram">
                  <Link to="/network/search/telegram">Telegram</Link>
                </Menu.Item>
                <Menu.Item key="/network/search/discord">
                  <Link to="/network/search/discord">Discord</Link>
                </Menu.Item>
                <Menu.Item key="/network/search/instagram">
                  <Link to="/network/search/instagram">Instagram</Link>
                </Menu.Item>
                {/* <Menu.Item key="/network/ok"><Link to='/ok'>Ok</Link></Menu.Item>
              <Menu.Item key="/network/facebook"><Link to='/facebook'>Facebook</Link></Menu.Item>
              <Menu.Item key="/network/yandex"><Link to='/yandex'>Yandex</Link></Menu.Item>
              <Menu.Item key="/network/tiktok"><Link to='/tiktok'>TikTok</Link></Menu.Item> */}
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<FileProtectOutlined />}
                title="Оформление"
              >
                <Menu.Item key="/network/formalization/vk">
                  <Link to="/network/formalization/vk">Vk</Link>
                </Menu.Item>
              </SubMenu>
            </SubMenu>
          )}
          {isAuth && (
            <SubMenu key="sub4" icon={<MenuOutlined />} title="Наши проекты">
              <Menu.Item>
                <a
                  href="https://wargaming.com/ru/games/world-of-tanks"
                  target="_blank"
                  rel="noreferrer"
                >
                  World of Tanks
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="https://wargaming.com/ru/games/world-of-warships"
                  target="_blank"
                  rel="noreferrer"
                >
                  World of Warships
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="https://wargaming.com/ru/games/wows-blitz"
                  target="_blank"
                  rel="noreferrer"
                >
                  World of Warships Blitz
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="https://wargaming.com/ru/games/world-of-warplanes"
                  target="_blank"
                  rel="noreferrer"
                >
                  World of Warplanes
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="https://wargaming.com/ru/games/world-of-tanks-blitz"
                  target="_blank"
                  rel="noreferrer"
                >
                  World of Tanks Blitz
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="https://wargaming.com/ru/games/world-of-tanks-console"
                  target="_blank"
                  rel="noreferrer"
                >
                  World of Tanks (Xbox/PS5)
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="https://wargaming.com/ru/games/master-of-orion"
                  target="_blank"
                  rel="noreferrer"
                >
                  Master of Orion
                </a>
              </Menu.Item>
            </SubMenu>
          )}
          {isAuth && (
            <SubMenu key="sub5" icon={<GithubOutlined />} title="Мои контакты">
              <Menu.Item>
                <a
                  href="https://t.me/web_front_dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="https://vk.com/id315800614"
                  target="_blank"
                  rel="noreferrer"
                >
                  Vk
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="http://www.facebook.com/profile.php?id=100014898465280"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </Menu.Item>
            </SubMenu>
          )}
          {/* <SubMenu key="sub6" icon={<SettingOutlined />} title="Настройки">
            <SubMenu key="sub7" icon={<EyeOutlined />} title="Тема">
              <Menu.Item key="1" onClick={() => setDarkTheme(!darkTheme)} >{darkTheme ? 'Обычная' : 'Темная'}</Menu.Item>
            </SubMenu>
            <SubMenu key="sub8" icon={<TranslationOutlined />} title='Язык'>
              <Menu.Item key="2" onClick={() => setEnglishLanguage(!englishLanguage)} >{englishLanguage ? 'Руский' : 'English'}</Menu.Item>
            </SubMenu>
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
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
              {/* <Route path='/network/ok' render={() => <OkSearchSuspense />} />
                <Route path='/network/facebook' render={() => <FacebookSearchSuspense />} />
                <Route path='/network/yandex' render={() => <YandexSearchSuspense />} />
                <Route path='/network/tiktok' render={() => <TikTokSearchSuspense />} /> */}
              <Route path="*" render={() => <NotFound />} />
            </Switch>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            marginTop: '150px',
            background: 'Gainsboro',
          }}
        >
          {isAuth && <Comments />}
        </Footer>
      </Layout>
    </Layout>
  )
})

const MainApp: React.FC<PropsType> = React.memo((props) => {
  return (
    <BrowserRouter>
      <Profiler id="App" onRender={logProfiler}>
        <CatchError>
          <Provider store={store}>
            <App {...props} />
          </Provider>
        </CatchError>
      </Profiler>
    </BrowserRouter>
  )
})

export default withUserAgent(MainApp)
