import SiderAuthorizedItems from 'components/sider/SiderAuthorizedItems'
import SiderUnauthorizedItems from 'components/sider/SiderUnauthorizedItems'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { isAuthSelector } from 'selectors/authSelectors'

const SiderMenu: FC = () => {
  const isAuth = useSelector(isAuthSelector)

  return isAuth ? <SiderAuthorizedItems /> : <SiderUnauthorizedItems />
}

export default SiderMenu
