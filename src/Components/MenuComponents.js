import React from "react";
import { MenuContainer, MenuItem, IconStyle, colors } from "../Styles/Styles";
import { ReactComponent as HomeMenuIcon } from "../Icons/home-menu-icon.svg";
import { ReactComponent as PackageMenuIcon } from "../Icons/package-menu-icon.svg";
import { ReactComponent as MapPinMenuIcon } from "../Icons/mappin-menu-icon.svg";

function MenuComponents(props) {
  return (
    <MenuContainer>
      <MenuItem active={true}>
        <HomeMenuIcon class="icon" style={IconStyle}></HomeMenuIcon>
        Home
      </MenuItem>
      <MenuItem>
        <PackageMenuIcon class="icon" style={IconStyle}></PackageMenuIcon>
        Packages
      </MenuItem>
      <MenuItem>
        <MapPinMenuIcon class="icon" style={IconStyle}></MapPinMenuIcon>
        Map
      </MenuItem>
    </MenuContainer>
  );
}

export default MenuComponents;
