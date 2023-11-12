import { Box, Button, createTheme } from "@mui/material";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { getDesignTokens } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useMemo, useState } from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance/Experiance";
import Skills from "./components/Skills";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") || "light"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: theme.palette.primary.main }}>
        <Navbar setMode={setMode} />
        <Hero />
        <About />
        <Skills />
        <Experiance />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
