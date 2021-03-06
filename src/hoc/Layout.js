import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    color: "black",
  },
}));
function Layout(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (props.match.path === "/blogs") {
      setValue(1);
    }
  }, [props.match.path]);
  const handleChange = (newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      props.history.push("/home");
    }
    if (newValue === 1) {
      props.history.push("/blogs");
    }
  };
  console.log(value);
  return (
    <div>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, v) => {
            e.preventDefault();
            console.log(e, v);
            handleChange(v);
          }}
        >
          <Tab label="Users" />
          <Tab label="Active" />
        </Tabs>
      </Paper>
      {props.children}
    </div>
  );
}
export default withRouter(Layout);
