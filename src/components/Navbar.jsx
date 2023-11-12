import { Container, IconButton, Stack, useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "../assets/logo.webp";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

function Navbar({ setMode }) {
  let [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  let theme = useTheme();

  const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "achievements",
      title: "Achievments",
    },
    {
      id: "pricing",
      title: "Pricing",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

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
    <Box
      sx={{
        py: 2,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 20,
        width: "100%",
        backgroundColor: scrolled ? "#050816" : "transparent",
      }}
      className="navbar"
    >
      <Container style={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{ height: "100px", width: "100px", cursor: "pointer" }}
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img loading="lazy" src={logo} alt="logo" />
          </Box>

          <Box sx={{ display: { sm: "flex", xs: "none" } }}>
            <ul>
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  style={{
                    color: "#fefefe",
                    marginRight: "20px",
                    fontSize: "18px",
                  }}
                  onClick={() => setActive(navLink.title)}
                >
                  <a href={`#${navLink.id}`}>{navLink.title}</a>
                </li>
              ))}

              <Stack direction={"row"} style={{ marginLeft: "auto" }}>
                {theme.palette.mode === "light" ? (
                  <IconButton
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                    sx={{ marginRight: "20px" }}
                  >
                    <LightModeOutlined sx={{ color: "#fff" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );

                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                    sx={{ marginRight: "20px" }}
                  >
                    <DarkModeOutlined sx={{ color: "#fff" }} />
                  </IconButton>
                )}
              </Stack>
            </ul>
          </Box>

          <Box sx={{ display: { xs: "block", sm: "none", cursor: "pointer" } }}>
            <img
              src={toggle ? close : menu}
              alt="menu"
              onClick={() => setToggle(!toggle)}
            />
          </Box>

          <Box
            sx={{
              display: { xs: toggle ? "block" : "none", sm: "none" },
              position: "absolute",
              top: "100px",
              right: 0,
              textAlign: "left",
              background: theme.palette.fourtiary.main,
              width: "150px",
              borderRadius: "4px",
              marginRight: "16px",
              padding: 2,
            }}
          >
            <ul
              style={{ flexDirection: "column", alignItems: "center", gap: 2 }}
            >
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  style={{
                    color: "#fefefe",
                    fontSize: "18px",
                    padding: "8px",
                  }}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(navLink.title);
                  }}
                >
                  <a href={`#${navLink.id}`}>{navLink.title}</a>
                </li>
              ))}

              <Stack direction={"row"}>
                {theme.palette.mode === "light" ? (
                  <IconButton
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );
                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                  >
                    <LightModeOutlined sx={{ color: "#fff" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => {
                      localStorage.setItem(
                        "currentMode",
                        theme.palette.mode === "dark" ? "light" : "dark"
                      );

                      setMode((prevMode) =>
                        prevMode === "light" ? "dark" : "light"
                      );
                    }}
                  >
                    <DarkModeOutlined sx={{ color: "#fff" }} />
                  </IconButton>
                )}
              </Stack>
            </ul>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
