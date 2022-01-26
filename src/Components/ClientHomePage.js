import React, { useState, useEffect } from "react";
import { FlexContainer, GearIconStyle, colors } from "../Styles/Styles";
import { ReactComponent as GearIcon } from "../Icons/gear-icon.svg";
import ListItemComponent from "./ListItemComponent";
import MenuComponents from "./MenuComponents";
import { useNavigate } from "react-router-dom";

function ClientHomePage(props) {
  const [packages, setPackages] = useState([]);
  let history = useNavigate();

  useEffect(() => {
    const getPackagesInfo = async () => {
      let token = localStorage.getItem("access-token");
      if (token === null) {
        return false;
      }

      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "GET",
      };

      fetch(
        "http://vps-143d0992.vps.ovh.net:8000/api/user/client-errands",
        options
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            return null;
          }
        })
        .then((data) => {
          if (data === null) {
            return alert("Something went wrong");
          }
          console.log(data);
          setPackages(data);
        });
    };

    if (localStorage.getItem("account-type") !== "client") {
      history("/login");
    }
    getPackagesInfo();
  }, []);
  return (
    <>
      {/* GearIcon */}
      <GearIcon fill={colors.darkBlue} style={GearIconStyle} />
      {/* Menu Component */}
      <MenuComponents></MenuComponents>

      {/* Title Welcome user Text */}
      <div
        style={{
          color: colors.darkBlue,
          fontSize: "1.5rem",
          fontWeight: "bold",
          textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.25)",
        }}
      >
        {`Hello ${localStorage.getItem("user-name")}`}
      </div>

      {/* errands container */}
      <FlexContainer orientation="v" height="100%">
        {/* errands */}
        <div
          style={{
            color:
              packages.length === 0 ? colors.lightYellow : colors.lightBlue,
            fontSize: "2.05rem",
            fontWeight: "bold",
            textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.1)",
            marginTop: "1rem",
          }}
        >
          {packages.length === 0 ? "No active packages" : "Errands"}
        </div>

        {/* errands List */}
        {packages.map((packageInfo) => {
          let background =
            packageInfo.status === "active"
              ? colors.lightYellow
              : colors.lightBlue;

          return (
            <ListItemComponent
              background={background}
              address={`${packageInfo.package.addressFrom.street} ${packageInfo.package.addressFrom.flatNumber}`}
              weight={`${packageInfo.package.weight}kg`}
              distance="0.9km"
            ></ListItemComponent>
          );
        })}
      </FlexContainer>
    </>
  );
}

export default ClientHomePage;
