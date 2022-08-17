import { Typography } from "@mui/material";
import styles from "./ownerSkills.module.scss";
interface Props {
  skills: {
    name: string;
    knowledgeAmount: number;
  }[];
}

const OwnerProjects = ({ skills }: Props) => {
  return (
    <ul className={styles.list}>
      {skills.map(({ name }) => (
        <li key={name}>
          <Typography variant="h6" className="secondaryText">
            {name}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export default OwnerProjects;
