import { Menu } from 'antd'
import { wargamingProjects } from 'data'
import React, { FC, useMemo } from 'react'

const MenuWargamingProjects: FC = () => {
  return useMemo(() => {
    return (
      <>
        {wargamingProjects.map(({ href, projectName }) => {
          return (
            <Menu.Item key={href}>
              <a href={href} target="_blank" rel="noreferrer">
                {projectName}
              </a>
            </Menu.Item>
          )
        })}
      </>
    )
  }, [])
}

export default MenuWargamingProjects
