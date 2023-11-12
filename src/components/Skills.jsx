import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import html from "../assets/tech/html.webp";
import css from "../assets/tech/css.webp";
import js from "../assets/tech/javascript.webp";
import jquery from "../assets/tech/jquery.webp";
import bootstap from "../assets/tech/bootstrap.webp";
import ajax from "../assets/tech/ajax.webp";
import json from "../assets/tech/json.webp";
import react from "../assets/tech/reactjs.webp";
import redux from "../assets/tech/redux.webp";
import typeScript from "../assets/tech/typescript.webp";
import git from "../assets/tech/git.webp";
import materialUi from "../assets/tech/material-ui.webp";

function Skills() {
  const theme = useTheme();

  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: js,
    },
    {
      name: "Jquery",
      icon: jquery,
    },
    {
      name: "Bootstrap",
      icon: bootstap,
    },
    {
      name: "Ajax",
      icon: ajax,
    },
    {
      name: "Json",
      icon: json,
    },
    {
      name: "TypeScript",
      icon: typeScript,
    },
    {
      name: "React JS",
      icon: react,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Material Ui",
      icon: materialUi,
    },
    {
      name: "git",
      icon: git,
    },
  ];

  return (
    <Box>
      <Container>
        <Typography
          variant="sectionHeadText"
          sx={{ color: theme.palette.secondary.main }}
        >
          My Skills
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "space-between" },
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {technologies.map((technology) => (
            <Box
              sx={{ width: "150px", height: "150px" }}
              key={technology.name}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src={technology.icon} alt={technology.name} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;
