import React from "react";
import { useForm } from "react-hook-form";

import {
  FlexContainer,
  UndrawIconStyle,
  FormStyle,
  Input,
  Button,
  colors,
  InputPhoto,
} from "../Styles/Styles";
import { ReactComponent as CourierRegIcon } from "../Icons/courier-reg-icon.svg";
import variables from "../Variables";

function CourierRegistration(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    if (data.confirmPasword !== data.password)
      return alert("Passwords do not match!");
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        lastname: data.lastname,
        password: data.password,
      }),
    };
    fetch(`${variables.endpoint}/api/user/courier-register`, options).then(
      (result) => {
        if (result.status === 200) {
          alert("Courier registered");
        } else {
          alert("Something went wrong");
        }
      }
    );
  };

  return (
    <>
      <FlexContainer orientation="v" height="100%">
        {/* Title Courier Registration*/}
        <div
          style={{
            color: colors.darkBlue,
            fontSize: "1.5rem",
            fontWeight: "bold",
            textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.25)",
          }}
        >
          Courier Registration
        </div>
        <CourierRegIcon
          className="icon"
          style={(UndrawIconStyle, { marginTop: "2rem" })}
        ></CourierRegIcon>

        <form style={FormStyle} onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Name"
            {...register("name", { required: true })}
          ></Input>
          <Input
            placeholder="Lastname"
            {...register("lastname", { required: true })}
          ></Input>
          <Input
            placeholder="E-mail"
            {...register("email", { required: true })}
          ></Input>
          <Input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          ></Input>
          <Input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPasword", { required: true })}
          ></Input>
          <InputPhoto>
            <input
              type="file"
              placeholder="Scan of personal document"
              {...register("personalDocument")}
            ></input>
          </InputPhoto>
          <Button type="submit" value="Submit"></Button>
        </form>
      </FlexContainer>
    </>
  );
}

export default CourierRegistration;
