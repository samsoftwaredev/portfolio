import * as React from "react";
import { Box, LinearProgress } from "@mui/material";

interface Props {
  skills: {
    name: string;
    knowledgeAmount: number;
  }[];
}

const OwnerProjects = ({ skills }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      {skills.map(({ name, knowledgeAmount }) => (
        <Box key={name}>
          {name}
          <LinearProgress variant="determinate" value={knowledgeAmount} />
        </Box>
      ))}
    </Box>
  );
};

export default OwnerProjects;
