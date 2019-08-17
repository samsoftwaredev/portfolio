import React, { Fragment } from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../../Nav/NavItems/NavItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./Sidebar.css";
const sidebar = props => {
  let attachedClasses = [classes.Sidebar, classes.Close];
  if (props.open) {
    attachedClasses = [classes.Sidebar, classes.Open];
  }

  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.clicked} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav className={classes.SidebarItems}>
          <NavItems />
        </nav>
      </div>
    </Fragment>
  );
};
export default sidebar;
