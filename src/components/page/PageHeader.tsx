import { Header } from 'antd/lib/layout/layout'
import React, { FC, useMemo } from 'react'

const PageHeader: FC = () => {
  return useMemo(() => {
    return <Header className="site-layout-background" style={{ padding: 0 }} />
  }, [])
}

export default PageHeader
