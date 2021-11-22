import React, { FC, useEffect, useMemo } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store, { DispatchType } from 'store'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import { withUserAgent } from 'react-useragent'
import CatchError from 'components/CatchError'
import { titleSelector } from 'selectors/appSelectors'
import { isAuthSelector } from 'selectors/authSelectors'
import { LocationType, UaType, UserData } from 'types/Types'
import { actions as appActions } from 'store/appReducer'
import { actions as authActions } from 'store/authReducer'
import { getCommentsThunk } from 'store/commentReducer'
import ChatContent from 'components/chat/ChatContent'
import ChatFooter from 'components/chat/ChatFooter'
import ChatHeader from 'components/chat/ChatHeader'
import ChatSider from 'components/chat/ChatSider'
import { setTitleHelper } from 'helpers/helper'

type PropsType = {
  ua: UaType
}

const App: FC<PropsType> = ({ ua }) => {
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
    const title = setTitleHelper(pathname)
    dispatch(appActions.setTitle(title))
  }, [pathname, dispatch])

  useEffect(() => {
    document.title = title
  }, [title])

  return useMemo(() => {
    return (
      <Layout style={{ minHeight: '100vh', minWidth: '690px' }}>
        <ChatSider ua={ua} />
        <Layout className="site-layout">
          <ChatHeader />
          <ChatContent />
          <ChatFooter />
        </Layout>
      </Layout>
    )
  }, [isAuth, pathname])
}

const MainApp: React.FC<PropsType> = ({ ua }) => {
  return (
    <CatchError>
      <BrowserRouter>
        <Provider store={store}>
          <App ua={ua} />
        </Provider>
      </BrowserRouter>
    </CatchError>
  )
}

export default withUserAgent(MainApp)
