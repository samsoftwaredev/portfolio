import * as React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { GitHub, RemoveRedEye } from "@mui/icons-material";
import styles from "./ownerProjects.module.scss";

interface Props {
  projects: {
    title: string;
    description: string;
    image?: StaticImageData;
    imageAlt: string;
    websiteURL?: string;
    videoURL?: string;
    repositoryURL?: string;
    objective?: string;
    languages?: string;
  }[];
}

const OwnerProjects = ({ projects }: Props) => {
  return (
    <Box className={styles.container}>
      {projects.map((p) => (
        <Card key={p.title} className={styles.item}>
          {p.image && (
            <Box className={styles.imageContainer}>
              <Image
                className={styles.image}
                layout="fill"
                alt={p.imageAlt}
                src={p.image}
                quality={100}
              />
            </Box>
          )}
          <CardContent sx={{ height: { sm: "100%", lg: "350px" } }}>
            <Typography
              align="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              {p.title}
            </Typography>
            <Typography variant="body1" component="div">
              <b>Description:</b> {p.description}
            </Typography>
            {p.objective && (
              <Typography variant="body1" component="div">
                <b>Objective:</b> {p.objective}
              </Typography>
            )}
            {p.languages && (
              <Typography variant="body1" component="div">
                <b>Languages:</b> {p.languages}
              </Typography>
            )}
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}
          >
            {p.repositoryURL && (
              <Button
                variant="outlined"
                startIcon={<GitHub />}
                href={p.repositoryURL}
                target="_github"
                color="warning"
              >
                Repository
              </Button>
            )}
            {p.videoURL && (
              <Button
                target="_app"
                startIcon={<RemoveRedEye />}
                href={p.videoURL}
                variant="contained"
                color="warning"
              >
                View Video
              </Button>
            )}
            {p.websiteURL && (
              <Button
                target="_app"
                startIcon={<RemoveRedEye />}
                href={p.websiteURL}
                variant="contained"
                color="warning"
              >
                View App
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default OwnerProjects;
