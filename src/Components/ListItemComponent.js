import React from "react";
import { FlexContainer, ListItem, colors } from "../Styles/Styles";

function ListItemComponent(props) {
  const emptyFunc=()=>{};
  const clickHandler=props.clickMethod?props.clickMethod:emptyFunc;

  return (
    <ListItem onClick={()=>{clickHandler()}} background={props.background}>
      <div>{props.address}</div>
      <div>{props.weight}</div>
      <div>{props.distance}{props.status?<> | {props.status}</>:null}</div>
    </ListItem>
  );
}

export default ListItemComponent;
