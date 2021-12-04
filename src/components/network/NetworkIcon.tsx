import { LocationType } from 'types/Types'
import {
  SendOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from '@ant-design/icons'
import { FC } from 'react'
import { useLocation } from 'react-router'

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
