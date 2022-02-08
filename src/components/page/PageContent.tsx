import { Content } from 'antd/lib/layout/layout'
import PageBreadcrumb from 'components/page/PageBreadcrumb'
import { authorizedRoutes, unauthorizedRoutes } from 'data'
import React, { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
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
          <Routes>
            {(isAuth ? authorizedRoutes : unauthorizedRoutes).map(
              ({ Element, name, ...rest }) => {
                return <Route {...rest} key={name} element={<Element />} />
              }
            )}
          </Routes>
        </div>
      </Content>
    )
  }, [isAuth])
}

export default PageContent
