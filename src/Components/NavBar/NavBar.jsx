//npm import
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

//Local import

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginRight: 50,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button className={classes.button} color="inherit">
            Books
          </Button>
          <Button className={classes.button} color="inherit">
            Characters
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
