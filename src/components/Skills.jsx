import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import js from "../assets/tech/javascript.png";
import jquery from "../assets/tech/jquery.png";
import bootstap from "../assets/tech/bootstrap.png";
import ajax from "../assets/tech/ajax.png";
import json from "../assets/tech/json.png";
import react from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import typeScript from "../assets/tech/typescript.png";
import git from "../assets/tech/git.png";
import materialUi from "../assets/tech/material-ui.png";

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
              <img src={technology.icon} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;
