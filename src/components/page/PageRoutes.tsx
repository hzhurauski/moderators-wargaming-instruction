import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router'
import { authorizedRoutes, unauthorizedRoutes } from 'routes'
import { isAuthSelector } from 'selectors/authSelectors'

const PageRoutes: FC = () => {
  const isAuth = useSelector(isAuthSelector)

  return (
    <Routes>
      {(isAuth ? authorizedRoutes : unauthorizedRoutes).map(
        ({ Element, name, ...rest }) => {
          return <Route {...rest} key={name} element={<Element />} />
        }
      )}
    </Routes>
  )
}

export default PageRoutes
