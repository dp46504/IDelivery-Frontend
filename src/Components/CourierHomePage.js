import React, { useEffect, useState, useRef } from "react";
import {
  FlexContainer,
  GearIconStyle,
  colors,
  DialogSlider,
  Button,
} from "../Styles/Styles";
import { ReactComponent as GearIcon } from "../Icons/gear-icon.svg";
import ListItemComponent from "./ListItemComponent";
import MenuComponents from "./MenuComponents";
import { useNavigate } from "react-router-dom";
import variables from "../Variables";

function CourierHomePage(props) {
  let history = useNavigate();
  const [packages, setPackages] = useState([]);
  const [packageUuid, setPackageUuid] = useState("");

  let sliderRef = useRef(null);

  function slideUp(idPackage) {
    let slider = sliderRef.current;
    slider.style.bottom == "-20%" || !slider.style.bottom
      ? (slider.style.bottom = 0)
      : (slider.style.bottom = "-20%");
    setPackageUuid(idPackage);
  }

  const update = async (packageUuid) => {
    let token = localStorage.getItem("access-token");
    if (token === null) {
      return false;
    }

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "PATCH",
    };
    if (packageUuid === "") {
      return null;
    }
    fetch(
      `${variables.endpoint}/api/user/update-status/${packageUuid}`,
      options
    ).then((response) => {
      if (response.status === 200) {
        return alert("Package status updated");
      } else {
        return alert("Something went wrong");
      }
    });
  };

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
            return item.status !== "awaiting";
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

  const reserved = (item) => {
    return (
      item.status === "reserved" ||
      item.status === "ongoing" ||
      item.status === "delivered"
    );
  };

  const received = (item) => {
    return item.status === "received";
  };

  return (
    <>
      {/* GearIcon */}
      <GearIcon
        fill={colors.darkBlue}
        style={GearIconStyle}
        onClick={() => {
          history("/settings");
        }}
      />
      {/* Menu Component */}
      <MenuComponents></MenuComponents>

      {/* Title Welcome user Text */}
      <FlexContainer orientation="v" height="5%">
        <div
          style={{
            color: colors.darkBlue,
            fontSize: "1.5rem",
            fontWeight: "bold",
            textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.25)",
          }}
        >
          {`Hello ${localStorage.getItem("user-name")}!`}
        </div>
      </FlexContainer>

      {/* Active errands and history container */}
      {/* Active */}
      <div
        style={{
          color: colors.lightYellow,
          fontSize: "2.05rem",
          fontWeight: "bold",
          textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        Active errand
      </div>
      {packages.filter(reserved).length === 0 ? (
        <div>There is no active packages</div>
      ) : null}
      {/* Active errands List */}

      {packages.map((packageInfo) => {
        if (packageInfo.status === "received") {
          return null;
        }

        return (
          <ListItemComponent
            clickMethod={() => {
              slideUp(packageInfo.package.uuid);
            }}
            key={packageInfo.package.uuid}
            background={colors.lightYellow}
            address={`${packageInfo.package.addressTo.street} ${packageInfo.package.addressTo.flatNumber}`}
            weight={`${packageInfo.package.weight}kg`}
            distance={`${packageInfo.package.distance}m`}
            status={packageInfo.status}
          ></ListItemComponent>
        );
      })}

      {/* History */}

      <div
        style={{
          color: colors.lightBlue,
          fontSize: "2.05rem",
          fontWeight: "bold",
          textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.1)",
          marginTop: "1rem",
          textAlign: "center",
        }}
      >
        History
      </div>

      {packages.filter(received).length === 0 ? (
        <div>There is no delivered packages</div>
      ) : null}

      {/* History errands List */}
      {packages.map((packageInfo) => {
        if (packageInfo.status !== "received") {
          return null;
        }

        return (
          <ListItemComponent
            key={packageInfo.package.uuid}
            background={colors.lightBlue}
            address={`${packageInfo.package.addressTo.street} ${packageInfo.package.addressTo.flatNumber}`}
            weight={`${packageInfo.package.weight}kg`}
            distance={`${packageInfo.package.distance}m`}
          ></ListItemComponent>
        );
      })}
      <DialogSlider ref={sliderRef}>
        <FlexContainer orientation="v" height="100%">
          <Button
            onClick={() => {
              update(packageUuid);
            }}
            type="button"
            value="Update status"
          />
        </FlexContainer>
      </DialogSlider>
    </>
  );
}

export default CourierHomePage;
