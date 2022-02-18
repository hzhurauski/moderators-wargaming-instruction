import { Layout } from 'antd'
import 'antd/dist/antd.css'
import CatchError from 'components/CatchError'
import PageContent from 'components/page/PageContent'
import PageFooter from 'components/page/PageFooter'
import PageHeader from 'components/page/PageHeader'
import PageSider from 'components/page/PageSider'
import { setTitleHelper } from 'helpers'
import React, { FC, useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, useLocation, useNavigate } from 'react-router-dom'
import { titleSelector } from 'selectors/appSelectors'
import { isAuthSelector } from 'selectors/authSelectors'
import store, { AppDispatch } from 'store'
import { actions as appActions } from 'store/appReducer'
import { actions as authActions } from 'store/authReducer'
import { getCommentsThunk } from 'store/commentReducer'

const App: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { pathname } = useLocation()
  const isAuth = useSelector(isAuthSelector)
  const title = useSelector(titleSelector)
  const [lastPathname, setLastPathname] = useState<string>('')
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      const pathname = localStorage.getItem('pathname')

      setLastPathname(pathname || '/home')
    } else {
      setLastPathname('/login')
    }
  }, [isAuth])

  useEffect(() => {
    navigate(lastPathname)
  }, [lastPathname])

  useEffect(() => {
    const userName = localStorage.getItem('name')

    if (userName) {
      dispatch(authActions.setIsAuth(true))
      dispatch(authActions.setUserName(userName))
    }

    dispatch(getCommentsThunk())
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

const MainApp: FC = () => {
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
