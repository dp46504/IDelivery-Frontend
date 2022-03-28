import React, { useState, useEffect, useRef } from "react";
import {
  FlexContainer,
  GearIconStyle,
  colors,
  DialogSlider,
  Button,
  WhiteSpacer,
} from "../Styles/Styles";
import { ReactComponent as GearIcon } from "../Icons/gear-icon.svg";
import ListItemComponent from "./ListItemComponent";
import MenuComponents from "./MenuComponents";
import { useNavigate } from "react-router-dom";
import variables from "../Variables";

function ClientHomePage(props) {
  const [packages, setPackages] = useState([]);
  const [reload, setReload] = useState(0);
  const [packageUuid, setPackageUuid] = useState("");

  let sliderRef = useRef(null);

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

      fetch(`${variables.endpoint}/api/user/client-errands`, options)
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
    setInterval(() => {
      setReload((reload) => reload + 1);
    }, 5000);
  }, []);

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

      fetch(`${variables.endpoint}/api/user/client-errands`, options)
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
  }, [reload]);

  const received = (item) => {
    return item.status === "received";
  };

  const notReceived = (item) => {
    return item.status !== "received";
  };

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
        setReload(reload + 1);
        slideUp(null);
        return alert("Package status updated");
      } else {
        return alert("Something went wrong");
      }
    });
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

      {/* errands container */}
      {/* errands */}
      <div
        style={{
          color:
            packages.filter(notReceived).length === 0
              ? colors.lightYellow
              : colors.lightBlue,
          fontSize: "2.05rem",
          fontWeight: "bold",
          textShadow: "0.5rem 0.5rem 1rem rgba(0,0,0,0.1)",
          marginTop: "1rem",
          textAlign: "center",
        }}
      >
        {packages.filter(notReceived).length === 0
          ? "No active packages"
          : "Errands"}
      </div>

      {/* errands List */}
      {packages.map((packageInfo) => {
        if (packageInfo.status === "received") {
          return null;
        }

        let background =
          packageInfo.status === "reserved" ||
          packageInfo.status === "ongoing" ||
          packageInfo.status === "delivered"
            ? colors.lightYellow
            : colors.lightBlue;

        // Append ClickMethod if package need finalizing

        return (
          <ListItemComponent
            clickMethod={() => {
              if (packageInfo.status === "delivered") {
                slideUp(packageInfo.package.uuid);
              }
            }}
            key={packageInfo.package.uuid}
            background={background}
            address={`${packageInfo.package.addressFrom.street} ${packageInfo.package.addressFrom.flatNumber}`}
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
            status={packageInfo.status}
          ></ListItemComponent>
        );
      })}
      <WhiteSpacer></WhiteSpacer>
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

export default ClientHomePage;
