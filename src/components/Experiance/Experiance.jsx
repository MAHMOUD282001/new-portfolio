import { Box, Container, Typography, useTheme } from "@mui/material";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperianceCard from "./ExperianceCard";
import logo from "../../assets/logo.png";

function Services() {
  let theme = useTheme();

  let experiences = [
    {
      title: "Update 2 Existing Projects As Freelance",
      icon: logo,
      description: `I Updated 2 Existing Project Built in Html Css Js`,
      date: `08/2023 – 09/2023`,
    },
    {
      title: "Front End Internship at Dr Code",
      icon: logo,
      description: `I Worked For Real Ecommerce Project With Back End Developer and FrontEnd Developer`,
      date: `03/2023 – 05/2023`,
    },
    {
      title: "Front End Internship at Eraa Soft",
      icon: logo,
      description: `Trainning on tasks from Practical Life with Html Css, Javascript,
        Bootstrap, Problem Solving`,
      date: `09/2022 – 10/2022`,
    },
    {
      title: "Front End Training At Trickcis",
      icon: logo,
      description: `Building responsive websites by Html Css, vanilla JavaScript, Jquery,
        Bootstrap`,
      date: `08/2021 – 10/2021`,
    },
    {
      title: "Nasa Space Apps Competition",
      icon: logo,
      description:
        "I participated in the competition With Team as Front End Developer",
      date: `10/2021`,
    },
  ];

  return (
    <Box id="services" sx={{ overflowX: "hidden" }}>
      <Container>
        <Typography
          variant="sectionHeadText"
          sx={{ color: theme.palette.secondary.main }}
        >
          Experiance
        </Typography>

        <VerticalTimeline lineColor={theme.palette.secondary.main}>
          {experiences.map((experience, index) => (
            <ExperianceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Container>
    </Box>
  );
}

export default Services;
