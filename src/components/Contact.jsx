import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import EarthCanvas from "./canvas/Earth";

function Contact() {
  let theme = useTheme();
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_w9to9ji",
        "template_cyhlpym",
        {
          from_name: form.name,
          to_name: "Growth Hackers",
          from_email: form.email,
          to_email: "mahmoud.khallaf2001@gmail.com",
          message: form.message,
        },
        "ZBWlWVREgPrgkwC-N"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("شكرًا لك. سأعود إليك في أقرب وقت ممكن.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("آه، حدث خطأ ما. يرجى المحاولة مرة أخرى.");
        }
      );
  };

  return (
    <Box id="contact">
      <Container>
        <Typography
          variant="sectionHeadText"
          sx={{ color: theme.palette.secondary.main }}
        >
          Contact Me
        </Typography>
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            flexDirection: { md: "row", xs: "column-reverse" },
          }}
        >
          <Grid item xs={12} md={5} data-aos="fade-left">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography
                variant="sectionSubText"
                sx={{ color: theme.palette.secondary.main }}
              >
                Get In Touch
              </Typography>
            </Box>
            <form onSubmit={handleSubmit} ref={formRef}>
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                InputLabelProps={{
                  style: {
                    color: theme.palette.fiftiary.main,
                    direction: "rtl",
                    textAlign: "right",
                  },
                }}
                InputProps={{
                  style: {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                InputLabelProps={{
                  style: {
                    color: theme.palette.fiftiary.main,
                  },
                }}
                InputProps={{
                  style: {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="message"
                label="Message"
                name="message"
                autoComplete="msg"
                multiline
                rows={4}
                value={form.message}
                onChange={handleChange}
                InputLabelProps={{
                  style: {
                    color: theme.palette.fiftiary.main,
                  },
                }}
                InputProps={{
                  style: {
                    color: theme.palette.secondary.main,
                  },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexDirection: "row-reverse",
                  mt: 3,
                }}
              >
                <button className="common-btn">
                  {" "}
                  {loading ? "Sending" : "Send"}{" "}
                </button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Box sx={{ height: { md: "500px", xs: "350px" } }}>
              <EarthCanvas />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
