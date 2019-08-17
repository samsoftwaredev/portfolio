import React from "react";
import classes from "./Toolbar.css";
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import Menu from "../../UI/Menu/Menu";

const nav = props => {
  return (
    <header className={classes.Nav}>
      <div className={classes.NavMenu}>
        <Menu clicked={props.clicked} />
      </div>
      <div className={classes.NavLogo}>
        <Logo />
      </div>
      <nav className={[classes.NavItems, classes.DesktopOnly].join(" ")}>
        <NavItems />
      </nav>
    </header>
  );
};

export default nav;
