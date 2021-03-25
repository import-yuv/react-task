import React, { useState, useEffect } from "react";
import Home from "../components/Home";
export default function HomeContainer(props) {
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
      <Home {...props} allusers={allusers} />
    </>
  );
}
