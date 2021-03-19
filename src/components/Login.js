import React, { useState, useContext } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { InitialContext } from "../hoc/InitialContext";
const useStyles = makeStyles({
  root: {
    background: "lightblue",
    height: window.innerHeight,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    width: 400,
    height: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      transition: "0.7s",
      borderRadius: 30,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "70%",
  },
});
export default function Login({ allusers }) {
  const { updateUser } = useContext(InitialContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("");

  const [passwordError, setPassError] = useState(false);
  const [passHelperText, setPassHelperText] = useState("");
  const classes = useStyles();
  const handleChangeEmail = (e) => {
    let x = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
      e.target.value
    );
    if (!x) {
      setError(true);
    } else setError(false);
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      checkUser();
    } else {
      alert("Please Fill All The Details");
    }
  };
  const checkUser = () => {
    if (allusers) {
      let existingUser = allusers.find((data) => data.email === email) || false;
      let checkPassword = existingUser.username === password;
      if (!existingUser) {
        setError(true);
        setHelperText("Email not found: Try Another");
      } else {
        if (!checkPassword) {
          setPassError(true);
          setPassHelperText("Wrong Password");
        } else {
          setPassError(false);
          setPassHelperText("");
          setError(false);
          setHelperText("");
          updateUser(existingUser);
        }
      }
    }
  };
  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <h2>Login</h2>
          <TextField
            error={error}
            id="standard-error"
            label="Username"
            value={email}
            onChange={handleChangeEmail}
            placeholder="eg: abc@gmail.com"
            helperText={helperText}
          />
          <TextField
            id="standard"
            label="Password"
            value={password}
            onChange={handleChangePassword}
            helperText={passHelperText}
            error={passwordError}
            placeholder="eg: username"
          />
          <Button variant="contained" type="submit" color="primary">
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}
