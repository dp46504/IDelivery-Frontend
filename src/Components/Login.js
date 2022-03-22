import React from "react";
import { useForm } from "react-hook-form";

import {
  FlexContainer,
  UndrawIconStyle,
  FormStyled,
  Input,
  Button,
  colors,
} from "../Styles/Styles";
import { ReactComponent as MainLogo } from "../Icons/main-logo-icon.svg";
import { useNavigate } from "react-router-dom";
import variables from "../Variables";

function Login(props) {
  const { register, handleSubmit } = useForm();
  let history = useNavigate();

  const onSubmit = async (data) => {
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    };
    fetch(`${variables.endpoint}/api/user/login`, options)
      .then((result) => {
        if (result.status === 200) {
          return result.json();
        } else {
          return alert("Something went wrong");
        }
      })
      .then((data) => {
        localStorage.setItem("access-token", data.accessToken);
        localStorage.setItem("account-type", data.accountType);

        if (data.accountType === "courier") {
          history("/courier_homepage", { replace: true });
        } else {
          history("/client_homepage", { replace: true });
        }
      });
  };

  return (
    <>
      <FlexContainer orientation="v" height="100%">
        <MainLogo className="icon"></MainLogo>

        {/* Title Login*/}
        <div
          style={{
            color: colors.darkBlue,
            fontSize: "1.5rem",
            fontWeight: "bold",
            textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.25)",
          }}
        >
          Please, log in
        </div>
        <FormStyled onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Email"
            {...register("email", { required: true })}
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          ></Input>
          <Button type="submit" value="Log in"></Button>
        </FormStyled>
      </FlexContainer>
    </>
  );
}

export default Login;
