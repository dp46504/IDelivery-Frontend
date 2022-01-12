import React, { useState } from "react";
import MenuComponents from "./MenuComponents";
import {
  SearchBar,
  colors,
  SearchIconStyle,
  XIconStyle,
  MapContainerStyled,
} from "../Styles/Styles";
import { TileLayer, Marker, Popup } from "react-leaflet";
import { ReactComponent as SearchIcon } from "../Icons/search-icon.svg";
import { ReactComponent as XIcon } from "../Icons/x-icon.svg";

function Map(props) {
  let [address, setAddress] = useState("");

  return (
    <>
      {/* Menu */}
      <MenuComponents></MenuComponents>

      {/* SearchBar */}
      <SearchBar
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      ></SearchBar>
      <SearchIcon fill={colors.darkBlue} style={SearchIconStyle}></SearchIcon>
      <XIcon
        onClick={() => {
          setAddress("");
        }}
        fill={colors.darkBlue}
        style={XIconStyle}
      ></XIcon>

      <MapContainerStyled
        center={[51.505, -0.09]}
        zoom={20}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[51.505, -0.09]}></Marker>
      </MapContainerStyled>
    </>
  );
}

export default Map;
