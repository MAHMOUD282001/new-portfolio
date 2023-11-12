import { Phone, WhatsApp } from "@mui/icons-material";
import { Container, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Typed from "react-typed";
import meImg from "../assets/Me.png";

function Hero() {
  let theme = useTheme();
  const [scrolled, setScrolled] = useState(false);

  const text = `I am Mahmoud Khallaf`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Box className="hero">
      <Box
        sx={{
          position: "absolute",
          top: { md: "50%", xs: "55%" },
          transform: "translateY(-50%)",
          left: "0",
          width: "100%",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { md: "space-between", xs: "center" },
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                gap: 2,
              }}
            >
              <Box sx={{ width: { sm: "70vw", md: "50vw" } }}>
                <Typography
                  variant="heroHeadText"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <Typed
                    strings={[text]}
                    typeSpeed={100}
                    loop
                    showCursor={true}
                    bindInputFocusEvents={false}
                    cursorChar="|"
                    autoInsertCss={true}
                  />
                </Typography>

                <Typography
                  variant="heroSubText"
                  sx={{ mt: 2 }}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Hello, I am Mahmoud Khallaf, Front End Developer React Js
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box
                data-aos="fade-up"
                data-aos-delay="700"
                sx={{
                  width: { xs: "250px", md: "400px" },
                  height: { xs: "250px", md: "400px" },
                  mt: { xs: "20px", md: "0" },
                  background: theme.palette.fourtiary.main,
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70% ",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <img src={meImg} alt="Me" />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Hero;
