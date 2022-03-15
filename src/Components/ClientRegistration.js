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
import { ReactComponent as ClientRegIcon } from "../Icons/client-reg-icon.svg";
import variables from "../Variables";

function ClientRegistration(props) {
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
        address: {
          country: data.country,
          city: data.city,
          street: data.street,
          flatNumber: data.flatnumber,
          postCode: data.postcode,
        },
        password: data.password,
      }),
    };
    fetch(`${variables.endpoint}/api/user/client-register`, options).then(
      (result) => {
        if (result.status === 200) {
          alert("Client registered");
        } else {
          alert("Something went wrong");
        }
      }
    );
  };

  return (
    <>
      <FlexContainer orientation="v" height="30%">
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
      </FlexContainer>

      <FormStyled onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="Street"
          {...register("street", { required: true })}
        ></Input>
        <Input
          placeholder="Flat Number"
          {...register("flatnumber", { required: true })}
        ></Input>
        <Input
          placeholder="Post Code"
          {...register("postcode", { required: true })}
        ></Input>
        <Input
          placeholder="City"
          {...register("city", { required: true })}
        ></Input>
        <Input
          placeholder="Country"
          {...register("country", { required: true })}
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
      </FormStyled>
    </>
  );
}

export default ClientRegistration;
