import { Menu } from 'antd'
import { searchNetworks } from 'data'
import React, { FC, useMemo } from 'react'
import { Link } from 'react-router-dom'

const MenuSearchNetworks: FC = () => {
  return useMemo(() => {
    return (
      <>
        {searchNetworks.map(({ socialNetwork, link }) => {
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

export default MenuSearchNetworks
