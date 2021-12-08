import { Menu } from 'antd'
import { myContacts } from 'data'
import React, { FC, useMemo } from 'react'

const MenuMyContacts: FC = () => {
  return useMemo(() => {
    return (
      <>
        {myContacts.map(({ href, socialNetwork }) => {
          return (
            <Menu.Item key={href}>
              <a href={href} target="_blank" rel="noreferrer">
                {socialNetwork}
              </a>
            </Menu.Item>
          )
        })}
      </>
    )
  }, [])
}

export default MenuMyContacts
