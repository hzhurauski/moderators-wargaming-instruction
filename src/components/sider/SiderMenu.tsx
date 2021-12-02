import { Menu } from 'antd'
import {
  CloseOutlined,
  HomeOutlined,
  LockOutlined,
  SearchOutlined,
  MenuOutlined,
  GithubOutlined,
  FileProtectOutlined,
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { isAuthSelector } from 'selectors/authSelectors'
import { Link, useLocation } from 'react-router-dom'
import NetworkIcon from 'components/network/Icon'
import { LocationType } from 'types/Types'
import { FC, useCallback } from 'react'
import { DispatchType } from 'store'
import { actions } from 'store/authReducer'
import {
  formalizationNetworkData,
  myContacts,
  searchNetworkData,
  wargamingProject,
} from 'helpers/helper'

const { SubMenu } = Menu

const SiderMenu: FC = () => {
  const { pathname } = useLocation<LocationType>()
  const isAuth = useSelector(isAuthSelector)
  const dispatch = useDispatch<DispatchType>()

  const handleClick = useCallback(() => {
    localStorage.removeItem('userData')
    dispatch(actions.setIsAuth(false))
  }, [dispatch])

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['/login']}
      selectedKeys={[pathname]}
      mode="inline"
    >
      {!isAuth ? (
        <Menu.Item key="/login" icon={<LockOutlined />}>
          <Link to="/login">Аутентификация</Link>
        </Menu.Item>
      ) : (
        <>
          <Menu.Item
            key="/login"
            icon={<CloseOutlined />}
            onClick={handleClick}
          >
            <Link to="/login">Выйти</Link>
          </Menu.Item>
          <Menu.Item key="/home" icon={<HomeOutlined />}>
            <Link to="/home">Введение</Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<NetworkIcon pathname={pathname} />}
            title="Социальные сети"
          >
            <SubMenu key="sub2" icon={<SearchOutlined />} title="Поиск">
              {searchNetworkData.map(({ socialNetwork, link }) => {
                return (
                  <Menu.Item key={link}>
                    <Link to={link}>{socialNetwork}</Link>
                  </Menu.Item>
                )
              })}
            </SubMenu>
            <SubMenu
              key="sub3"
              icon={<FileProtectOutlined />}
              title="Оформление"
            >
              {formalizationNetworkData.map(({ link, socialNetwork }) => {
                return (
                  <Menu.Item key={socialNetwork}>
                    <Link to={link}>{socialNetwork}</Link>
                  </Menu.Item>
                )
              })}
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" icon={<MenuOutlined />} title="Наши проекты">
            {wargamingProject.map(({ href, projectName }) => {
              return (
                <Menu.Item key={projectName}>
                  <a href={href} target="_blank" rel="noreferrer">
                    {projectName}
                  </a>
                </Menu.Item>
              )
            })}
          </SubMenu>
          <SubMenu key="sub5" icon={<GithubOutlined />} title="Мои контакты">
            {myContacts.map(({ href, socialNetwork }) => {
              return (
                <Menu.Item key={socialNetwork}>
                  <a href={href} target="_blank" rel="noreferrer">
                    {socialNetwork}
                  </a>
                </Menu.Item>
              )
            })}
          </SubMenu>
        </>
      )}
    </Menu>
  )
}

export default SiderMenu
