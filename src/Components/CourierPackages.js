import React, { useState, useEffect, useRef } from "react";
import ListItemComponent from "./ListItemComponent";
import {
  FlexContainer,
  colors,
  RefreshIconStyle,
  DialogSlider,
  Button,
  WhiteSpacer,
} from "../Styles/Styles";
import MenuComponents from "./MenuComponents";
import { ReactComponent as MainLogo } from "../Icons/main-logo-icon.svg";
import { useNavigate } from "react-router-dom";
import variables from "../Variables";

const Courierpackages = () => {
  const [packages, setPackages] = useState([]);
  const [reload, setReload] = useState(0);
  const [packageUuid, setPackageUuid] = useState("");
  let history = useNavigate();

  let sliderRef = useRef(null);

  function slideUp(idPackage) {
    let slider = sliderRef.current;
    slider.style.bottom == "-20%" || !slider.style.bottom
      ? (slider.style.bottom = 0)
      : (slider.style.bottom = "-20%");
    setPackageUuid(idPackage);
  }
  const reserve = async (packageUuid) => {
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
        slideUp(null);
        return alert("Package reserved");
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
            return item.status === "awaiting";
          };

          let packageList = data.filter(comp);
          console.log(packageList);
          setPackages(packageList);
        });
    };

    if (localStorage.getItem("account-type") !== "courier") {
      history("/");
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
          console.log(packageList);
          setPackages(packageList);
        });
    };

    if (localStorage.getItem("account-type") !== "courier") {
      history("/");
    }
    getPackagesInfo();
  }, [reload]);
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
                clickMethod={() => {
                  slideUp(packageInfo.package.uuid);
                }}
                key={packageInfo.package.uuid}
                background={colors.lightBlue}
                address={`${packageInfo.package.addressTo.street} ${packageInfo.package.addressTo.flatNumber}`}
                weight={`${packageInfo.package.weight}kg`}
                distance={`${packageInfo.package.distance}m`}
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
      <WhiteSpacer></WhiteSpacer>
      <DialogSlider ref={sliderRef}>
        <FlexContainer orientation="v" height="100%">
          <Button
            onClick={() => {
              reserve(packageUuid);
            }}
            type="button"
            value="Reserve"
          />
        </FlexContainer>
      </DialogSlider>
    </>
  );
};

export default Courierpackages;
