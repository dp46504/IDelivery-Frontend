import React, { useState } from "react";
import MenuComponents from "./MenuComponents";
import {
  SearchBar,
  colors,
  SearchIconStyle,
  XIconStyle,
  MapContainerStyled,
} from "../Styles/Styles";
import { TileLayer, Marker } from "react-leaflet";
import { ReactComponent as SearchIcon } from "../Icons/search-icon.svg";
import { ReactComponent as XIcon } from "../Icons/x-icon.svg";
import {
  PackageMarkerSelected,
  PackageMarkerNormal,
} from "../Helpers/PackageMarker";

function Map(props) {
  let [address, setAddress] = useState("");
  const [position, setPosition] = useState([53.43276, 14.54815]);

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
        center={position}
        zoom={20}
        scrollWheelZoom={true}
        zoomControl={false}
        id="map"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          icon={PackageMarkerNormal}
          position={[53.4345, 14.54815]}
        ></Marker>
        <Marker
          icon={PackageMarkerNormal}
          position={[53.4342, 14.54885]}
        ></Marker>
        <Marker
          icon={PackageMarkerNormal}
          position={[53.43355, 14.5486]}
        ></Marker>
      </MapContainerStyled>
    </>
  );
}

export default Map;
