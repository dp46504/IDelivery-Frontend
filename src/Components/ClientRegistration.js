import React from "react";
import { useForm } from "react-hook-form";

import {
  FlexContainer,
  UndrawIconStyle,
  FormStyle,
  Input,
  Button,
  colors,
} from "../Styles/Styles";
import { ReactComponent as ClientRegIcon } from "../Icons/client-reg-icon.svg";

function ClientRegistration(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.confirmPasword !== data.password)
      return alert("Passwords do not match!");

    // TODO Send to back-end :^)
  };

  return (
    <>
      {/* Title Client Registration*/}
      <div
        style={{
          color: colors.darkBlue,
          fontSize: "1.5rem",
          fontWeight: "bold",
          textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.25)",
        }}
      >
        Client Registration
      </div>
      <ClientRegIcon
        className="icon"
        style={(UndrawIconStyle, { marginTop: "2rem" })}
      ></ClientRegIcon>

      <FlexContainer orientation="v" height="100%">
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
          <Button type="submit" value="Submit"></Button>
        </form>
      </FlexContainer>
    </>
  );
}

export default ClientRegistration;
