import { Layout } from 'antd'
import 'antd/dist/antd.css'
import CatchError from 'components/CatchError'
import PageContent from 'components/page/PageContent'
import PageFooter from 'components/page/PageFooter'
import PageHeader from 'components/page/PageHeader'
import PageSider from 'components/page/PageSider'
import { setTitleHelper } from 'helpers/helper'
import React, { FC, useEffect } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { titleSelector } from 'selectors/appSelectors'
import { isAuthSelector } from 'selectors/authSelectors'
import store, { DispatchType } from 'store'
import { actions as appActions } from 'store/appReducer'
import { actions as authActions } from 'store/authReducer'
import { getCommentsThunk } from 'store/commentReducer'
import { LocationType, UserData } from 'types/Types'

const App: FC = () => {
  const dispatch = useDispatch<DispatchType>()
  const { pathname } = useLocation<LocationType>()
  const isAuth = useSelector(isAuthSelector)
  const title = useSelector(titleSelector)

  useEffect(() => {
    const userData = localStorage.getItem('userData')

    if (userData) {
      const { isRememberMe, name } = JSON.parse(userData) as UserData

      if (isRememberMe && name) {
        dispatch(authActions.setIsAuth(true))
        dispatch(authActions.setUserData(name, isRememberMe))
      }
    }

    getCommentsThunk()
  }, [dispatch])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (isAuth) {
      localStorage.setItem('pathname', pathname)
    }
  }, [isAuth, pathname])

  useEffect(() => {
    const title = setTitleHelper(pathname)
    dispatch(appActions.setTitle(title))
  }, [pathname, dispatch])

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <Layout style={{ minHeight: '100vh', minWidth: '690px' }}>
      <PageSider />
      <Layout className="site-layout">
        <PageHeader />
        <PageContent />
        <PageFooter />
      </Layout>
    </Layout>
  )
}

const MainApp: React.FC = () => {
  return (
    <CatchError>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </CatchError>
  )
}

export default MainApp
