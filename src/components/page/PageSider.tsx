import { Layout, Menu } from 'antd'
import {
  CloseOutlined,
  HomeOutlined,
  LockOutlined,
  SearchOutlined,
  MenuOutlined,
  GithubOutlined,
  FileProtectOutlined,
} from '@ant-design/icons'
import { LocationType, UaType } from 'types/Types'
import { FC, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isAuthSelector } from 'selectors/authSelectors'
import { useLocation } from 'react-router'
import { actions } from 'store/authReducer'
import { Link } from 'react-router-dom'
import NetworkIcon from 'components/network/Icon'
import { DispatchType } from 'store'

const { Sider } = Layout
const { SubMenu } = Menu

type PropsType = {
  ua: UaType
}

const PageSider: FC<PropsType> = ({ ua }) => {
  const isAuth = useSelector(isAuthSelector)
  const dispatch = useDispatch<DispatchType>()
  const { pathname } = useLocation<LocationType>()
  const [collapsed, setCollapsed] = useState<boolean>(ua.mobile ? true : false)

  const onCollapse = useCallback((collapsed: boolean) => {
    setCollapsed(collapsed)
  }, [])

  const handleClick = useCallback(() => {
    localStorage.removeItem('userData')
    dispatch(actions.setIsAuth(false))
  }, [dispatch])

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={['/login']}
        selectedKeys={[pathname]}
        mode="inline"
      >
        {isAuth ? (
          <Menu.Item
            key="/login"
            icon={<CloseOutlined />}
            onClick={handleClick}
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
            icon={<NetworkIcon pathname={pathname} />}
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
      </Menu>
    </Sider>
  )
}

export default PageSider
