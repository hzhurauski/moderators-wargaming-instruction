import { Breadcrumb } from 'antd'
import { Route } from 'antd/lib/breadcrumb/Breadcrumb'
import { itemRender } from 'components/Breadcrumb'
import { setRoutes } from 'helpers'
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import { RoutesType } from 'types/route/RouteTypes'

const PageBreadcrumb: FC = () => {
  const [breadCrumbs, setBreadCrumbs] = useState<RoutesType[]>([])
  const { pathname } = useLocation()

  const changeBreadCrumb = useCallback((): RoutesType[] => {
    const url = pathname.split('/')
    const routes: RoutesType[] = []
    const index = 0

    return setRoutes(url, routes, index)
  }, [pathname])

  useEffect(() => {
    setBreadCrumbs(changeBreadCrumb() as RoutesType[])
  }, [changeBreadCrumb])

  return useMemo(() => {
    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb itemRender={itemRender} routes={breadCrumbs as Route[]} />
      </Breadcrumb>
    )
  }, [breadCrumbs])
}

export default PageBreadcrumb
