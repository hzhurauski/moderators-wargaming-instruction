import { Link } from 'react-router-dom'
import { RoutesType } from 'types/routes/RoutesTypes'

export const itemRender = (
  route: RoutesType,
  params: any,
  routes: Array<RoutesType>,
  paths: any
) => {
  const last = routes.indexOf(route) === routes.length - 1
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  )
}
