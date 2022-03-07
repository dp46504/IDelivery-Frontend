import React from "react";
import {
  FlexContainer,
  LeftArrowIconStyle,
  FormStyle,
  colors,
  Input,
  Button,
} from "../Styles/Styles";
import { ReactComponent as LeftArrowIcon } from "../Icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Settings(props) {
  let history = useNavigate();
  const { register, handleSubmit } = useForm();

  const logout = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("account-type");
    history("/login");
  };

  const onSubmit = (data) => {
    if (data.confirmPasword !== data.password)
      return alert("Passwords do not match!");

    // TODO Send to back-end :^)
  };

  return (
    <FlexContainer orientation="v" height="100%">
      {/* Left arrow (Go Back) */}
      <LeftArrowIcon
        onClick={() => {
          history(-1);
        }}
        style={LeftArrowIconStyle}
      ></LeftArrowIcon>

      <FlexContainer
        orientation="v"
        height="45%"
        style={{ justifyContent: "center" }}
      >
        <Button
          value="Change account details"
          style={{ marginTop: 0 }}
        ></Button>
        <Button value="Report an error" style={{ marginTop: 0 }}></Button>
      </FlexContainer>

      <form style={FormStyle} onSubmit={handleSubmit(onSubmit)}>
        {/* Title Client Registration*/}
        <div
          style={{
            color: colors.darkBlue,
            fontSize: "1.5rem",
            fontWeight: "bold",
            textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.25)",
          }}
        >
          Change password
        </div>

        <Input
          placeholder="Current password"
          {...register("current_password", { required: true })}
        ></Input>

        <Input
          placeholder="New password"
          {...register("new_password", { required: true })}
        ></Input>

        <Input
          placeholder="Repeat new password"
          {...register("repeat_new_password", { required: true })}
        ></Input>

        <Button type="submit" value="Confirm"></Button>
      </form>

      <Button
        value="Logout"
        onClick={() => {
          logout();
        }}
      ></Button>
    </FlexContainer>
  );
}

export default Settings;
