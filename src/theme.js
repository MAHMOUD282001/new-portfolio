export const getDesignTokens = (mode) => ({
  typography: {
    heroHeadText: {
      fontWeight: "bold",
      color: "white",
      fontSize: "30px",
      lineHeight: "55px",
      display: "block",
      "@media (min-width: 600px)": {
        fontSize: "40px",
      },
      "@media (min-width: 900px)": {
        fontSize: "50px",
      },
    },
    heroSubText: {
      fontWeight: "500",
      color: "#f3f3f3",
      fontSize: "16px",
      lineHeight: "40px",
      display: "block",
      "@media (min-width: 600px)": {
        fontSize: "18px",
      },
      "@media (min-width: 900px)": {
        fontSize: "22px",
      },
    },
    sectionHeadText: {
      color: "#f3f3f3",
      fontSize: "30px",
      margin: "70px 0 30px 0",
      textAlign: "center",
      display: "block",
      "@media (min-width: 600px)": {
        fontSize: "35px",
      },
      "@media (min-width: 900px)": {
        fontSize: "40px",
      },
    },
    sectionSubText: {
      fontWeight: "normal",
      color: "#f3f3f3",
      display: "block",
      fontSize: "20px",
      lineHeight: "40px",
      letterSpacing: "wider",
      "@media (min-width: 600px)": {
        fontSize: "25px",
      },
    },

    sectionSubSubText: {
      fontWeight: "normal",
      color: "#f3f3f3",
      display: "block",
      fontSize: "14px",
      lineHeight: "40px",
      letterSpacing: "wider",
      "@media (min-width: 600px)": {
        fontSize: "16px",
      },
      "@media (min-width: 900px)": {
        fontSize: "18px",
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1000,
      lg: 1400,
      xl: 1600,
    },
  },

  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#050816",
          },
          secondary: {
            main: "#fefefe",
          },
          tertiary: {
            main: "#8754AF",
          },
          fourtiary: {
            main: "#58B787",
          },
        }
      : {
          primary: {
            main: "#fefefe",
          },
          secondary: {
            main: "#050816",
          },
          tertiary: {
            main: "#8754AF",
          },
          fourtiary: {
            main: "#58B787",
          },
        }),
  },
});
