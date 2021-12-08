import {
  FacebookOutlined,
  InstagramOutlined,
  SendOutlined,
} from '@ant-design/icons'
import React, { FC } from 'react'
import { useLocation } from 'react-router'
import { LocationType } from 'types/Types'

const NetworkIcon: FC = () => {
  const { pathname } = useLocation<LocationType>()

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
