import { Content } from 'antd/lib/layout/layout'
import PageBreadcrumb from 'components/page/PageBreadcrumb'
import PageRoutes from 'components/page/PageRoutes'
import React, { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { isAuthSelector } from 'selectors/authSelectors'

const PageContent: FC = () => {
  const isAuth = useSelector(isAuthSelector)

  return useMemo(() => {
    return (
      <Content style={{ margin: '0 16px' }}>
        {isAuth && <PageBreadcrumb />}
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <PageRoutes />
        </div>
      </Content>
    )
  }, [isAuth])
}

export default PageContent
