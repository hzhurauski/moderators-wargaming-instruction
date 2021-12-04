import { useSelector } from 'react-redux'
import { isAuthSelector } from 'selectors/authSelectors'
import { FC } from 'react'
import SiderAuthorizedItems from 'components/sider/SiderAuthorizedItems'
import SiderUnauthorizedItems from 'components/sider/SiderUnauthorizedItems'

const SiderMenu: FC = () => {
  const isAuth = useSelector(isAuthSelector)

  return isAuth ? <SiderAuthorizedItems /> : <SiderUnauthorizedItems />
}

export default SiderMenu
