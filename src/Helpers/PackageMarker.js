import L from "leaflet";
import packageIconSelected from "../Icons/package-pin-icon-selected.svg";
import packageIconNormal from "../Icons/package-pin-icon-normal.svg";

const PackageMarkerSelected = new L.Icon({
  iconUrl: packageIconSelected,
  iconRetinaUrl: packageIconSelected,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(50, 50),
});

const PackageMarkerNormal = new L.Icon({
  iconUrl: packageIconNormal,
  iconRetinaUrl: packageIconNormal,
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(50, 50),
});

export { PackageMarkerSelected, PackageMarkerNormal };
