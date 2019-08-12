import React from "react";

const nav = () => {
  return (
    <nav className="Nav">
      <ul className="Nav_link-list">
        <li
          id="Nav_link-list_item_logo"
          className="Nav_link-list_item Landing_primary-font"
        >
          <span id="Nav_link-list_item_logo_icon">SR</span>
        </li>
        <li className="Nav_link-list_item">Contact Me</li>
        <li className="Nav_link-list_item">About</li>
        <li className="Nav_link-list_item">Projects</li>
        <li className="Nav_link-list_item">Articles</li>
        <li className="Nav_link-list_item">Videos</li>
      </ul>
    </nav>
  );
};

export default nav;
