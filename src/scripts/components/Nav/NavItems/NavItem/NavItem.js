import React from "react";
import classes from "./NavItem.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const navItem = props => {
  return props.navItems.map(item => {
    return (
      <li key={item.name} className={classes.NavItem}>
        <AnchorLink className={classes.NavLink} href={item.url}>
          {item.name}
        </AnchorLink>
      </li>
    );
  });
};
export default navItem;
