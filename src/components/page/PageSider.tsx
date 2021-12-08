import { Layout } from 'antd'
import SiderMenu from 'components/sider/SiderMenu'
import React, { FC, useCallback, useState } from 'react'
import { withUserAgent } from 'react-useragent'
import { UaType } from 'types/Types'

const { Sider } = Layout

type PropsType = {
  ua: UaType
}

const PageSider: FC<PropsType> = ({ ua }) => {
  const [collapsed, setCollapsed] = useState<boolean>(ua.mobile ? true : false)

  const onCollapse = useCallback((collapsed: boolean) => {
    setCollapsed(collapsed)
  }, [])

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <SiderMenu />
    </Sider>
  )
}

export default withUserAgent(PageSider)
