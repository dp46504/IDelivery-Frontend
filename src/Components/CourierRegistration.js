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

function CourierRegistration(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.confirmPasword !== data.password)
      return alert("Passwords do not match!");

    // TODO Send to back-end :^)
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
            placeholder="Address"
            {...register("address", { required: true })}
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
              {...register("personalDocument", { required: true })}
            ></input>
          </InputPhoto>
          <Button type="submit" value="Submit"></Button>
        </form>
      </FlexContainer>
    </>
  );
}

export default CourierRegistration;
