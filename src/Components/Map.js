import React, { useState, useEffect } from "react";
import MenuComponents from "./MenuComponents";
import {
  SearchBar,
  colors,
  SearchIconStyle,
  XIconStyle,
  MapContainerStyled,
  Button,
} from "../Styles/Styles";
import { TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { ReactComponent as SearchIcon } from "../Icons/search-icon.svg";
import { ReactComponent as XIcon } from "../Icons/x-icon.svg";
import {
  PackageMarkerSelected,
  PackageMarkerNormal,
} from "../Helpers/PackageMarker";

function Map(props) {
  let [address, setAddress] = useState("");
  const [position, setPosition] = useState([53.43276, 14.54815]);
  const [map, setMap] = useState(null);

  const checkMap = () => {
    document.getElementById("map");
  };

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
          icon={PackageMarkerSelected}
          position={[51.505, -0.09]}
        ></Marker>
        <Marker icon={PackageMarkerNormal} position={[51.506, -0.09]}></Marker>
      </MapContainerStyled>
      <Button
        style={{ position: "absolute", top: "100px", left: 0 }}
        onClick={() => {
          checkMap();
        }}
        value="Get"
      ></Button>
    </>
  );
}

export default Map;
