import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  let theme = useTheme();

  let [active, setActive] = useState("all");

  let myProjects = [
    {
      title: "Big Ecommerce With Payment Method",
      description:
        "I Created A Big Ecommerce With Dashboard To Apply CRUD In Products & Categories & Sub Categories & Coupons On Products With React Js & Mui ",
      img: "",
      category: "reactMui",
    },
    {
      title: "Big Ecommerce With Payment Method",
      description:
        "I Created A Big Ecommerce With Dashboard To Apply CRUD In Products & Categories & Sub Categories & Coupons On Products With React Js & Mui ",
      img: "",
      category: "htmlCss",
    },
    {
      title: "Big Ecommerce With Payment Method",
      description:
        "I Created A Big Ecommerce With Dashboard To Apply CRUD In Products & Categories & Sub Categories & Coupons On Products With React Js & Mui ",
      img: "",
      category: "reactMui",
    },
    {
      title: "Big Ecommerce With Payment Method",
      description:
        "I Created A Big Ecommerce With Dashboard To Apply CRUD In Products & Categories & Sub Categories & Coupons On Products With React Js & Mui ",
      img: "",
      category: "reactMui",
    },
    {
      title: "Big Ecommerce With Payment Method",
      description:
        "I Created A Big Ecommerce With Dashboard To Apply CRUD In Products & Categories & Sub Categories & Coupons On Products With React Js & Mui ",
      img: "",
      category: "reactMui",
    },
  ];

  let [updatedProjects, setUpdatedProjects] = useState(myProjects);

  let updateProjects = (category) => {
    setActive(category);
    if (category === "all") {
      setUpdatedProjects(myProjects);
    } else {
      setUpdatedProjects([]);
      setTimeout(() => {
        let newProjects = updatedProjects.filter((updatedProject) => {
          return updatedProject.category === category;
        });
        setUpdatedProjects(newProjects);
      });
    }
  };

  return (
    <Box>
      <Container>
        <Typography
          variant="sectionHeadText"
          sx={{ color: theme.palette.secondary.main }}
        >
          Projects
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box>
              <button
                onClick={() => updateProjects("all")}
                className={`common-btn ${active === "all" ? "active" : ""}`}
                style={{ width: "100%", marginBottom: "20px" }}
              >
                All
              </button>
              <button
                onClick={() => updateProjects("htmlCss")}
                className={`common-btn ${active === "htmlCss" ? "active" : ""}`}
                style={{ width: "100%", marginBottom: "20px" }}
              >
                Html & Css
              </button>
              <button
                className="common-btn"
                style={{ width: "100%", marginBottom: "20px" }}
              >
                Html & Css & Js
              </button>
              <button
                className="common-btn"
                style={{ width: "100%", marginBottom: "20px" }}
              >
                React Js
              </button>
              <button
                className="common-btn"
                style={{ width: "100%", marginBottom: "20px" }}
              >
                React Js & MUI
              </button>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {updatedProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  updateProjects={updateProjects}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
