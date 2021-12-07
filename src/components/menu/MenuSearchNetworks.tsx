import { searchNetworks } from 'data/data'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'

const MenuSearchNetworks = () => {
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
