import { Content } from 'antd/lib/layout/layout'
import PageBreadcrumb from 'components/page/PageBreadcrumb'
import PageRoutes from 'components/page/PageRoutes'
import React, { FC, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { isAuthSelector } from 'selectors/authSelectors'

const PageContent: FC = () => {
  const isAuth = useSelector(isAuthSelector)
  const [lastPathname, setLastPathname] = useState<string>('')

  useEffect(() => {
    if (isAuth) {
      const pathname = localStorage.getItem('pathname')
      setLastPathname(pathname || '/home')
    } else {
      setLastPathname('/login')
    }
  }, [isAuth])

  return useMemo(() => {
    return (
      <Content style={{ margin: '0 16px' }}>
        {isAuth && <PageBreadcrumb />}
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <PageRoutes />
          {lastPathname && <Navigate to={lastPathname} />}
        </div>
      </Content>
    )
  }, [isAuth, lastPathname])
}

export default PageContent
