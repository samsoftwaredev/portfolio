import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { StaticImageData } from "next/image";
import styles from "./ownerProjects.module.scss";
import { GitHub, RemoveRedEye } from "@mui/icons-material";

interface Props {
  projects: {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
    websiteURL?: string;
    repositoryURL?: string;
  }[];
}

const OwnerProjects = ({ projects }: Props) => {
  return (
    <Box className={styles.container}>
      {projects.map((p) => (
        <Card key={p.title} className={styles.item}>
          {/* <Image
              className={styles.image}
              alt={p.imageAlt}
              src={p.image}
              quality={100}
            /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {p.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              {p.description}
            </Typography>
          </CardContent>
          <CardActions>
            {p.repositoryURL && (
              <Button startIcon={<GitHub />} href={p.repositoryURL}>
                Repository
              </Button>
            )}
            {p.websiteURL && (
              <Button startIcon={<RemoveRedEye />} href={p.websiteURL}>
                View
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default OwnerProjects;
