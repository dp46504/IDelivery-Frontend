import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "../Components/Login";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes(props) {
  const [auth, setAuth] = useState(); // initially undefined
  let history = useNavigate();

  useEffect(() => {
    const IsAuth = async () => {
      let token = localStorage.getItem("access-token");
      if (token === null) {
        return false;
      }

      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
      };
      fetch("http://vps-143d0992.vps.ovh.net:8000/api/user/test", options)
        .then((result) => {
          console.log("CHECKING");
          if (result.status === 200) {
            console.log("CHECK GOOD");
            return result.json();
          } else {
            console.log("CHECK BAD");
            history("/login", { replace: true });
            return false;
          }
        })
        .then((data) => {
          if (data === false) {
            localStorage.removeItem("account-type");
            localStorage.removeItem("access-token");
            setAuth(false);
            return false;
          } else {
            localStorage.setItem("account-type", data.role);
            setAuth(true);
            return true;
          }
        });
    };
    IsAuth();
  }, []);

  return auth ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;
