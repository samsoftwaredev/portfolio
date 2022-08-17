import { Link, Typography } from "@mui/material";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const menu = [
    { name: "Skills", url: "" },
    { name: "Projects", url: "" },
    { name: "Contact", url: "" },
  ];
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {menu.map(({ name, url }) => (
          <li key={name}>
            <Link href={url}>
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
