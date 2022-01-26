const IsAuth = async () => {
  let token = localStorage.getItem("access-token");
  if (token === null) {
    return false;
  }

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}}`,
    },
    method: "POST",
  };
  fetch("http://vps-143d0992.vps.ovh.net:8000/api/user/test", options).then(
    (result) => {
      if (result.status === 200) {
        return true;
      } else {
        return false;
      }
    }
  );
};

export default IsAuth;
