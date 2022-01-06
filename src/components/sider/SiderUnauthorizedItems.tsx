import { LockOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SiderUnauthorizedItems: FC = () => {
  const { pathname } = useLocation()

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['/login']}
      selectedKeys={[pathname]}
      mode="inline"
    >
      <Menu.Item key="/login" icon={<LockOutlined />}>
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  )
}

export default SiderUnauthorizedItems
