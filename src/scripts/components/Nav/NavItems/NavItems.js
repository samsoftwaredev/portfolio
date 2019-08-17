import React from "react";
import classes from "./NavItems.css";
import NavItem from "./NavItem/NavItem";
const navItems = () => {
  const navItems = [
    { name: "About", url: "#about" },
    { name: "Contact Me", url: "#contact" },
    { name: "Projects", url: "#projects" }
  ];
  return (
    <ul className={classes.NavItems}>
      <NavItem navItems={navItems} />
    </ul>
  );
};
export default navItems;
