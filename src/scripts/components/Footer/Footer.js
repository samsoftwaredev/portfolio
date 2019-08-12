import React from "react";

const footer = () => {
  let date = new Date().toString();
  return (
    <footer className="Footer">
      <p>Add me on social media</p>
      <ul className="Footer_list">
        <li className="Footer_list_item">LinkedIn</li>
      </ul>
      <div>Last update: {date}</div>
    </footer>
  );
};
export default footer;
