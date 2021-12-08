import React from "react";
import { FlexContainer, ListItem, colors } from "../Styles/Styles";

function ListItemComponent(props) {
  return (
    <ListItem background={props.background}>
      <div>{props.address}</div>
      <div>{props.weight}kg</div>
      <div>{props.distance}km</div>
    </ListItem>
  );
}

export default ListItemComponent;
