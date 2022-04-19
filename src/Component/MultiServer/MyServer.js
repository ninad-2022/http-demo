import React, { useEffect, useState } from "react";
import { myApiInstance } from "../../API/API";
const MyAPIServer = () => {
  const [userR, setUser] = useState([]);
  useEffect(() => {
    myApiInstance.get("/users").then((response) => [setUser(response.data)]);
  }, []);
  return (
    <>
      <h2>MyAPIServer data here</h2>
      {Array.isArray(userR) &&
        userR.map(({ id, firstName, lastName, mobile }, i) => (
          <div key={i}>
            <h2>{id}</h2>
            <h2>
              {firstName} {lastName}
            </h2>
            <p>{mobile}</p>
          </div>
        ))}
    </>
  );
};

export default MyAPIServer;
