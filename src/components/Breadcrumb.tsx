import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { RoutesType } from 'types/routes/RoutesType'

export const itemRender = (
  route: RoutesType,
  params: unknown,
  routes: Array<RoutesType>,
  paths: string[]
): ReactElement => {
  const last = routes.indexOf(route) === routes.length - 1
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  )
}
