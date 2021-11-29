import { LocationType } from 'types/Types'
import {
  SendOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from '@ant-design/icons'
import { FC } from 'react'

type PropsType = {
  pathname: LocationType['pathname']
}

const NetworkIcon: FC<PropsType> = ({ pathname }) => {
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
