import React, { useEffect, useState } from "react";
import { typicodeInstance } from "../../API/API";
const TypicodeApiServer = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    typicodeInstance.get("/users").then((response) => {
      setUser(response.data);
      console.log(response);
    });
  }, []);
  return (
    <>
      <h2>TypicodeApiServer server</h2>
      {Array.isArray(user) &&
        user.map(({ id, email, first_name }, i) => (
          <div key={i}>
            <h2>{id}</h2>
            <h2>{email}</h2>
            <h3>{first_name}</h3>
          </div>
        ))}
    </>
  );
};

export default TypicodeApiServer;
