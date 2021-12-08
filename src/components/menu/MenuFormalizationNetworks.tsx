import { Menu } from 'antd'
import { formalizationNetworks } from 'data'
import React, { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'

const MenuFormalizationNetworks: FC = () => {
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
