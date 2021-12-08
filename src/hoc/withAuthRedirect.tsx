import React, { ComponentType, FC, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { isAuthSelector } from 'selectors/authSelectors'

type PropsType = {
  children?: ReactNode
}

export const withAuthRedirect = (
  WrappedComponent: ComponentType
): ReactNode => {
  const Component: FC<PropsType> = (props: PropsType) => {
    const isAuth = useSelector(isAuthSelector)

    if (!isAuth) return <Redirect to="/login" />
    return <WrappedComponent {...props} />
  }

  return Component
}
