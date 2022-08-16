import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import styles from "./ownerProjects.module.scss";

interface Props {
  projects: {
    title: string;
    description: string;
    image: StaticImageData;
    imageAlt: string;
  }[];
}

const OwnerProjects = ({ projects }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {projects.map(({ title, description, image, imageAlt }) => (
          <Grid item xs={2} sm={4} md={4} key={title}>
            <Card sx={{ maxWidth: 345 }}>
              <Image
                className={styles.image}
                alt={imageAlt}
                src={image}
                quality={100}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Repository</Button>
                <Button size="small">View</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OwnerProjects;
