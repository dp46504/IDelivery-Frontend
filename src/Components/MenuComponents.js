import React from 'react'
import { MenuContainer, MenuItem, IconStyle } from '../Styles/Styles'
import { ReactComponent as HomeMenuIcon } from '../Icons/home-menu-icon.svg'
import { ReactComponent as PackageMenuIcon } from '../Icons/package-menu-icon.svg'
import { ReactComponent as MapPinMenuIcon } from '../Icons/mappin-menu-icon.svg'

function MenuComponents(props) {
  return (
    <MenuContainer>
      <MenuItem to='/courier_homepage'>
        <HomeMenuIcon class='icon' style={IconStyle}></HomeMenuIcon>
        Home
      </MenuItem>

      <MenuItem to='/courier_packages'>
        <PackageMenuIcon class='icon' style={IconStyle}></PackageMenuIcon>
        Packages
      </MenuItem>

      <MenuItem exact to='/map'>
        <MapPinMenuIcon class='icon' style={IconStyle}></MapPinMenuIcon>
        Map
      </MenuItem>
    </MenuContainer>
  )
}

export default MenuComponents
