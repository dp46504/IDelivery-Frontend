import React,{useState, useEffect} from "react";
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
  const [rate, setRate] = useState(5)
  const [stars,setStars] = useState([
    <FullStarIcon
          onClick={()=>{
            setRate(1)
          }}
            style={{
              width: 50,
              height: 50,
              margin: "0.2rem",
            }}
          ></FullStarIcon>,<FullStarIcon
          onClick={()=>{
            setRate(2)
          }}
            style={{
              width: 50,
              height: 50,
              margin: "0.2rem",
            }}
          ></FullStarIcon>,<FullStarIcon
          onClick={()=>{
            setRate(3)
          }}
            style={{
              width: 50,
              height: 50,
              margin: "0.2rem",
            }}
          ></FullStarIcon>,<FullStarIcon
          onClick={()=>{
            setRate(4)
          }}
            style={{
              width: 50,
              height: 50,
              margin: "0.2rem",
            }}
          ></FullStarIcon>,<FullStarIcon
          onClick={()=>{
            setRate(5)
          }}
            style={{
              width: 50,
              height: 50,
              margin: "0.2rem",
            }}
          ></FullStarIcon>
  ])

  useEffect(() => {
    let children = []
    for(let i=1;i<=rate;i++){
      children.push(<FullStarIcon
        onClick={()=>{
          setRate(i)
        }}
          style={{
            width: 50,
            height: 50,
            margin: "0.2rem",
          }}
        ></FullStarIcon>)
    }
    for(let i=rate+1;i<=5;i++){
      children.push(<EmptyStarIcon
        onClick={()=>{
          setRate(i)
        }}
          style={{
            width: 50,
            height: 50,
            margin: "0.2rem",
          }}
        ></EmptyStarIcon>)
    } 
    setStars(children)
  },[rate])

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
          {stars}
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
