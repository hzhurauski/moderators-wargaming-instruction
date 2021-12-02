import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router'
import { authorizedRoutes, unauthorizedRoutes } from 'routes'
import { isAuthSelector } from 'selectors/authSelectors'

const PageRoutes: FC = () => {
  const isAuth = useSelector(isAuthSelector)

  return (
    <Switch>
      {isAuth
        ? authorizedRoutes.map((routes) => {
            return <Route {...routes} key={routes.name} />
          })
        : unauthorizedRoutes.map((routes) => {
            return <Route {...routes} key={routes.name} />
          })}
    </Switch>
  )
}

export default PageRoutes
