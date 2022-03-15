import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  FlexContainer,
  UndrawIconStyle,
  Input,
  Button,
  colors,
  LeftArrowIconStyle,
  FormStyled,
} from "../Styles/Styles";
import { ReactComponent as AddPackageIcon } from "../Icons/adding-package-icon.svg";
import { ReactComponent as LeftArrowIcon } from "../Icons/left-arrow-icon.svg";
import { useNavigate } from "react-router-dom";

function ClientAddPackage(props) {
  let history = useNavigate();
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    if (localStorage.getItem("account-type") !== "client") {
      history("/login");
    }
  }, []);
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

      {/* Title Client Registration*/}
      <FlexContainer orientation="v" height="30%">
        <div
          style={{
            color: colors.darkBlue,
            fontSize: "1.5rem",
            fontWeight: "bold",
            textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.25)",
          }}
        >
          Adding package
        </div>
        <AddPackageIcon
          className="icon"
          style={(UndrawIconStyle, { marginTop: "2rem" })}
        ></AddPackageIcon>
      </FlexContainer>

      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Address from"
          {...register("address_from", { required: true })}
        ></Input>
        <Input
          placeholder="Address to"
          {...register("address_to", { required: true })}
        ></Input>
        <Input
          placeholder="Cost (proposition)"
          {...register("cost", { required: true })}
        ></Input>
        <Input
          placeholder="Weight"
          {...register("weight", { required: true })}
        ></Input>
        <Input
          placeholder="Priority"
          {...register("priority", { required: true })}
        ></Input>
        <Input
          placeholder="Address from"
          {...register("address_from", { required: true })}
        ></Input>
        <Input
          placeholder="Address to"
          {...register("address_to", { required: true })}
        ></Input>
        <Input
          placeholder="Cost (proposition)"
          {...register("cost", { required: true })}
        ></Input>
        <Input
          placeholder="Weight"
          {...register("weight", { required: true })}
        ></Input>
        <Input
          placeholder="Priority"
          {...register("priority", { required: true })}
        ></Input>

        <Input
          placeholder="Address from"
          {...register("address_from", { required: true })}
        ></Input>
        <Input
          placeholder="Address to"
          {...register("address_to", { required: true })}
        ></Input>
        <Input
          placeholder="Cost (proposition)"
          {...register("cost", { required: true })}
        ></Input>
        <Input
          placeholder="Weight"
          {...register("weight", { required: true })}
        ></Input>
        <Input
          placeholder="Priority"
          {...register("priority", { required: true })}
        ></Input>
        <Input
          placeholder="Remarks"
          style={{
            height: "8rem",
          }}
          {...register("remarks", { required: true })}
        ></Input>
        <Button type="submit" value="Add"></Button>
      </FormStyled>
    </>
  );
}

export default ClientAddPackage;
