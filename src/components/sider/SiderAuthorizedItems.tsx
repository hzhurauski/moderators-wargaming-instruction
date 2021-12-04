import { Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { authorizedMenuItems, authorizedSubMenuItems } from 'helpers/helper'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { DispatchType } from 'store'
import { actions } from 'store/authReducer'
import { LocationType } from 'types/Types'

const SiderAuthorizedItems = () => {
  const { pathname } = useLocation<LocationType>()
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
      {authorizedMenuItems.map(({ title, Icon, link }) => {
        return (
          <Menu.Item
            key={link}
            icon={<Icon />}
            onClick={link === '/login' ? handleClick : undefined}
          >
            <Link to={link}>{title}</Link>
          </Menu.Item>
        )
      })}
      {authorizedSubMenuItems.map(({ Icon, title, Children }) => {
        return (
          <SubMenu icon={<Icon />} key={title} title={title}>
            <Children />
          </SubMenu>
        )
      })}
    </Menu>
  )
}

export default SiderAuthorizedItems
