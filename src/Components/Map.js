import React, { useState, useEffect } from "react";
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
import {
  PackageMarkerSelected,
  PackageMarkerNormal,
} from "../Helpers/PackageMarker";
import * as L from "leaflet";

function Map(props) {
  let [address, setAddress] = useState("");

  const setLocation = (map) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        map.setView(
          new L.LatLng(position.coords.latitude, position.coords.longitude),
          20,
          { animation: false }
        );
      },
      (error) => {
        console.log(error);
      }
    );
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
        zoom={20}
        scrollWheelZoom={true}
        zoomControl={false}
        whenCreated={(map) => {
          setLocation(map);
        }}
        id="map"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          id={0}
          icon={PackageMarkerNormal}
          position={[53.4345, 14.54815]}
        ></Marker>
        <Marker
          id={1}
          icon={PackageMarkerNormal}
          position={[53.4342, 14.54885]}
        ></Marker>
        <Marker
          id={2}
          icon={PackageMarkerNormal}
          position={[53.43355, 14.5486]}
        ></Marker>
      </MapContainerStyled>
    </>
  );
}

export default Map;
