import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import styles from "./ownerProjects.module.scss";

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
    <Grid
      container
      spacing={{ xs: 4, md: 5 }}
      columns={{ xs: 1, sm: 1, md: 12 }}
    >
      {projects.map((p) => (
        <Grid item xs={2} sm={4} md={4} key={p.title}>
          <Card>
            <Image
              className={styles.image}
              alt={p.imageAlt}
              src={p.image}
              quality={100}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {p.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {p.description}
              </Typography>
            </CardContent>
            <CardActions>
              {p.repositoryURL && <Button size="small">Repository</Button>}
              {p.websiteURL && <Button size="small">View</Button>}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OwnerProjects;
