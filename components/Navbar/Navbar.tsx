import { Typography } from "@mui/material";
import styles from "./navbar.module.scss";
import { Link } from "react-scroll";
import Logo from "../Logo";

const Navbar = () => {
  const menu = [
    { name: "About", hash: "about" },
    { name: "Skills", hash: "skills" },
    { name: "Projects", hash: "projects" },
    { name: "Contact", hash: "contact" },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {/* <li>
          <Logo />
        </li> */}
        {menu.map(({ name, hash }) => (
          <li key={name}>
            <Link
              to={hash}
              smooth={true}
              offset={-200}
              duration={500}
              className={styles.clickable}
            >
              <Typography
                color="white"
                variant="h6"
                gutterBottom
                className="secondaryText"
              >
                {name}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
