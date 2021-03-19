import React, { useEffect, useState } from "react";
import Login from "../components/Login";
export default function LoginContainer(props) {
  const [allusers, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const users = json.map((element, index) => {
          const user = element;
          return user;
        });
        setUsers(users);
      });
  };

  return (
    <>
      <Login allusers={allusers} />
    </>
  );
}
