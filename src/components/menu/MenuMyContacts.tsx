import { myContacts } from 'helpers/helper'
import { FC, useMemo } from 'react'
import { Menu } from 'antd'

const MenuMyContacts: FC = () => {
  return useMemo(() => {
    return (
      <>
        {myContacts.map(({ href, socialNetwork }) => {
          return (
            <Menu.Item key={socialNetwork}>
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
