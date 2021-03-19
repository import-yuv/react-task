import React, { useState } from "react";

const InitialContext = React.createContext();

const InitialProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const updateUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const signOut = () => {
    try {
      console.log("signedOut");
      if (user) {
        setUser(false);
        localStorage.setItem("user", false);
      }
    } catch (err) {
      console.log("err ", err);
    }
  };

  return (
    <InitialContext.Provider
      value={{
        user: user,
        updateUser: updateUser,
        signOut: signOut,
      }}
    >
      {children}
    </InitialContext.Provider>
  );
};

export { InitialContext, InitialProvider };
