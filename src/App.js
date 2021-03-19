import React, { useContext } from "react";
import { InitialContext } from "./hoc/InitialContext";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomeContainer from "./containers/Home";
import BlogsContainer from "./containers/Blogs";
import LoginContainer from "./containers/Login";
export default function App(props) {
  const { user, updateUser } = useContext(InitialContext);
  const existingUser = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Router>
        <div>
          {user || existingUser ? (
            <div>
              <Route
                path="/home"
                render={(props) => <HomeContainer {...props} />}
              />
              <Route
                path="/blogs"
                render={(props) => <BlogsContainer {...props} />}
              />
              <Redirect exact from="/" to="/home" />
            </div>
          ) : (
            <div>
              <Route
                exact
                path="/login"
                render={(props) => (
                  <LoginContainer {...props} updateUser={updateUser} />
                )}
              />

              <Redirect from="/" to="/login" />
            </div>
          )}
        </div>
      </Router>
    </div>
  );
}
