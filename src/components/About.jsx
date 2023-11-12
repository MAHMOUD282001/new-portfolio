import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import meImg from "../assets/Me.webp";

import {
  ChatBubbleOutlineOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import Typed from "react-typed";

function About() {
  let theme = useTheme();

  return (
    <Box id="about" sx={{ overflow: "hidden" }}>
      <Container>
        <Typography
          variant="sectionHeadText"
          sx={{ color: theme.palette.secondary.main }}
        >
          About
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Box>
              <Box>
                <Box>
                  <Typography
                    variant="sectionSubText"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    I'm Mahmoud Khallaf and I'm{" "}
                    <Typed
                      typeSpeed={100}
                      loop
                      showCursor={true}
                      bindInputFocusEvents={false}
                      cursorChar="|"
                      autoInsertCss={true}
                      strings={[" Front End Developer", " Freelancer"]}
                    ></Typed>
                  </Typography>
                  <Typography
                    variant="sectionSubSubText"
                    sx={{ color: theme.palette.secondary.main }}
                  >
                    Ambitious and self-motivated Front-End Developer with
                    experience in building responsive Websites.I seeking for new
                    opportunities and challenges that will expand my skills.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Box sx={{display: "flex", justifyContent: {md: "flex-end", xs: "center"}}}>
              <Box
                sx={{
                  width: { xs: "300px", md: "400px" },
                  height: { xs: "300px", md: "400px" },
                  background: "#FF0099",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img src={meImg} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
