import React from "react";
import { FlexContainer, ListItem, colors } from "../Styles/Styles";

function ListItemComponent(props) {
  return (
    <ListItem background={props.background}>
      <div>{props.address}</div>
      <div>{props.weight}</div>
      <div>{props.distance}</div>
    </ListItem>
  );
}

export default ListItemComponent;
