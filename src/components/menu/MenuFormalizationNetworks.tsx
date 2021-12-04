import { formalizationNetworks } from 'helpers/helper'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'

const MenuFormalizationNetworks = () => {
  return useMemo(() => {
    return (
      <>
        {formalizationNetworks.map(({ link, socialNetwork }) => {
          return (
            <Menu.Item key={link}>
              <Link to={link}>{socialNetwork}</Link>
            </Menu.Item>
          )
        })}
      </>
    )
  }, [])
}

export default MenuFormalizationNetworks
