import { ComponentType } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { isAuthSelector } from 'selectors/authSelectors'

export const withAuthRedirect = (WrappedComponent: ComponentType) => {
  return (props: any) => {
    const isAuth = useSelector(isAuthSelector)

    if (!isAuth) return <Redirect to="/login" />
    return <WrappedComponent {...props} />
  }
}
