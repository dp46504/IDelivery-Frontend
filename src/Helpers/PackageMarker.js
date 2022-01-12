import L from "leaflet";

const PackageMarker = new L.Icon({
  iconUrl: require("../Icons/package-pin-icon.svg"),
  iconAnchor: [32, 64],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [64, 64],
});

export default PackageMarker;
