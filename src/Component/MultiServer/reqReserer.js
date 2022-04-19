import React, { useEffect, useState } from "react";
import { reqResInstance } from "../../API/API";
const ReqResApiServer = () => {
  const [userR, setUser] = useState([]);
  useEffect(() => {
    reqResInstance
      .get("/users")
      .then((response) => [setUser(response.data.data)]);
  }, []);
  return (
    <>
      <h2>ReqResApiServer data here</h2>
      {Array.isArray(userR) &&
        userR.map(({ id, name, year, color }, i) => (
          <div key={i}>
            <h2>{id}</h2>
            <h2>
              {name} {year} {color}
            </h2>
          </div>
        ))}
    </>
  );
};

export default ReqResApiServer;
