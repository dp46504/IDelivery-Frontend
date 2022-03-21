import React, { useState, useEffect } from "react";
import ListItemComponent from "./ListItemComponent";
import { FlexContainer, colors, RefreshIconStyle } from "../Styles/Styles";
import MenuComponents from "./MenuComponents";
import { ReactComponent as MainLogo } from "../Icons/main-logo-icon.svg";
import { useNavigate } from "react-router-dom";
import variables from "../Variables";

const Courierpackages = () => {
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

      fetch(`${variables.endpoint}/api/user/packages`, options)
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

          const comp = (item) => {
            return item.status === "awaiting";
          };

          let packageList = data.filter(comp);

          setPackages(packageList);
        });
    };

    if (localStorage.getItem("account-type") !== "courier") {
      history("/login");
    }
    getPackagesInfo();
  }, []);
  return (
    <>
      <MenuComponents></MenuComponents>
      {/* List of packages nearby */}

      {packages.length !== 0 ? (
        <>
          <FlexContainer orientation="v" height="5%">
            <div
              style={{
                color: colors.darkBlue,
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.25)",
              }}
            >
              Packages
            </div>
          </FlexContainer>
          {packages.map((packageInfo) => {
            return (
              <ListItemComponent
                key={packageInfo.package.uuid}
                background={colors.lightBlue}
                address={`${packageInfo.package.addressTo.street} ${packageInfo.package.addressTo.flatNumber}`}
                weight={`${packageInfo.package.weight}kg`}
                distance={`${packageInfo.package.distance}km`}
              ></ListItemComponent>
            );
          })}
        </>
      ) : (
        <>
          <FlexContainer orientation="v" height="100%">
            <MainLogo className="icon"></MainLogo>
            <div
              style={{
                color: colors.darkBlue,
                fontSize: "1.5rem",
                fontWeight: "bold",
                textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.25)",
                textAlign: "center",
              }}
            >
              There is nothing to deliver.
              <br />
              Come back later.
            </div>
            <RefreshIconStyle></RefreshIconStyle>
          </FlexContainer>
        </>
      )}
    </>
  );
};

export default Courierpackages;
