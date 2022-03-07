import React from "react";
import {
  FlexContainer,
  colors,
  LeftArrowIconStyle,
  Button,
  Input,
  FormStyle,
} from "../Styles/Styles";
import { ReactComponent as LeftArrowIcon } from "../Icons/left-arrow-icon.svg";
import { ReactComponent as PersonIcon } from "../Icons/person-icon.svg";
import { ReactComponent as EmptyStarIcon } from "../Icons/empty-star-icon.svg";
import { ReactComponent as FullStarIcon } from "../Icons/full-star-icon.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function RateCourier(props) {
  let history = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.confirmPasword !== data.password)
      return alert("Passwords do not match!");

    // TODO Send to back-end :^)
  };

  return (
    <>
      {/* Left arrow (Go Back) */}
      <LeftArrowIcon
        onClick={() => {
          history(-1);
        }}
        style={LeftArrowIconStyle}
      ></LeftArrowIcon>

      {/* Title Rate Courier */}
      <div
        style={{
          color: colors.darkBlue,
          fontSize: "1.5rem",
          fontWeight: "bold",
          textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.25)",
        }}
      >
        Rate Courier
      </div>
      <FlexContainer orientation="v" height="100%">
        <FlexContainer orientation="v" height="40%">
          <PersonIcon
            style={{
              width: 100,
              height: 100,
            }}
          ></PersonIcon>
          <div
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginTop: "1rem",
            }}
          >
            &lt;COURIER NAME&gt;
          </div>
        </FlexContainer>

        <FlexContainer
          orientation="h"
          width="100%"
          style={{ justifyContent: "center" }}
        >
          <FullStarIcon
            style={{
              width: 50,
              height: 50,
              margin: "0.2rem",
            }}
          ></FullStarIcon>
          <FullStarIcon
            style={{
              width: 50,
              height: 50,
              margin: "0.2rem",
            }}
          ></FullStarIcon>
          <FullStarIcon
            style={{
              width: 50,
              height: 50,
              margin: "0.2rem",
            }}
          ></FullStarIcon>
          <FullStarIcon
            style={{
              width: 50,
              height: 50,
              margin: "0.2rem",
            }}
          ></FullStarIcon>
          <EmptyStarIcon
            style={{
              width: 50,
              height: 50,
              margin: "0.2rem",
            }}
          ></EmptyStarIcon>
        </FlexContainer>

        <form style={FormStyle} onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Remarks" style={{ height: "8rem" }}></Input>
          <Button type="submit" value="Submit"></Button>
        </form>
      </FlexContainer>
    </>
  );
}

export default RateCourier;
