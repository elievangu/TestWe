//npm import
import React from "react";
import { Link } from "react-router-dom";
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
          <Link to={`/`}  style={{ textDecoration: 'none' }}>
            <Button className={classes.button} color="inherit" >
              Home
            </Button>
          </Link>
          <Link to={`/books`} style={{ textDecoration: 'none' }}>
            <Button className={classes.button} color="inherit">
              Books
            </Button>
          </Link>
          <Link to={`/characters`} style={{ textDecoration: 'none' }}>
            <Button className={classes.button} color="inherit">
              Characters
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
