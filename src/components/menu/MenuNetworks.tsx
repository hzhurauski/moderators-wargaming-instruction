import { FileProtectOutlined, SearchOutlined } from '@ant-design/icons'
import SubMenu from 'antd/lib/menu/SubMenu'
import MenuFormalizationNetworks from 'components/menu/MenuFormalizationNetworks'
import MenuSearchNetworks from 'components/menu/MenuSearchNetworks'
import React, { FC } from 'react'

const MenuNetworks: FC = () => {
  return (
    <>
      <SubMenu key="Search" icon={<SearchOutlined />} title="Search">
        <MenuSearchNetworks />
      </SubMenu>
      <SubMenu
        key="Formalization"
        icon={<FileProtectOutlined />}
        title="Formalization"
      >
        <MenuFormalizationNetworks />
      </SubMenu>
    </>
  )
}

export default MenuNetworks
