import {
  FacebookOutlined,
  InstagramOutlined,
  SendOutlined,
} from '@ant-design/icons'
import React, { FC } from 'react'
import { useLocation } from 'react-router'

const NetworkIcon: FC = () => {
  const { pathname } = useLocation()

  switch (pathname) {
    case '/network/search/telegram':
      return <SendOutlined />
    case '/network/search/instagram':
      return <InstagramOutlined />
    default:
      return <FacebookOutlined />
  }
}

export default NetworkIcon
