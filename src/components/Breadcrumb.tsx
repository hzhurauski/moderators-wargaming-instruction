import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { RoutesType } from 'types/route/RouteTypes'

export const itemRender = (
  route: RoutesType,
  params: unknown,
  routes: RoutesType[],
  paths: string[]
): ReactElement => {
  const last = routes.indexOf(route) === routes.length - 1
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  )
}
