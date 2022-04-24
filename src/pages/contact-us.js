import {
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Button } from "../components/Button";
import { DLSection } from "../sections/DLSection";
import { Footer } from "../sections/Footer";

export const ContactUs = () => {
  const b1 = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Grid
        container
        width={b1 ? "90%" : "75%"}
        m="auto"
        my={4}
        justifyContent="center"
        alignItems="center"
        direction="row"
        maxWidth={1270}
      >
        <Grid item lg={5} width="100%">
          <Stack spacing={1}>
            <div data-aos="fade-up" data-aos-delay="100">
              <Typography
                variant="p"
                color="primary.main"
                sx={{ textTransform: "uppercase" }}
              >
                Contact us
              </Typography>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <Typography
                variant={b1 ? "h4" : "h3"}
                sx={{
                  fontWeight: 500,
                }}
              >
                We're listening :)
              </Typography>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 400,
                  color: "grey.main",
                }}
              >
                We’re here to help. Ask us about the product,
                <br /> our services, or any questions you have.
              </Typography>
            </div>
          </Stack>
        </Grid>
        <Grid item lg={7} width="100%">
          <div data-aos="zoom-in" data-aos-delay="800">
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <Stack
                p={6}
                spacing={4}
                bgcolor="white.main"
                justifyContent="center"
                alignItems="center"
                borderRadius={2}
                width={b1 ? "100%" : "420px"}
                m="auto"
                my={4}
                sx={{
                  boxShadow: "10px 10px 20px #eee",
                  boxSizing: b1 ? "border-box" : "",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  Get in touch
                </Typography>
                <Stack direction="row" spacing={2}>
                  <TextField
                    sx={{ width: "100%" }}
                    label="First Name"
                    name="first-name"
                    variant="outlined"
                    required
                  />
                  <TextField
                    sx={{ width: "100%" }}
                    label="Last Name"
                    name="last-name"
                    variant="outlined"
                    required
                  />
                </Stack>
                <TextField
                  sx={{ width: "100%" }}
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  required
                />
                <TextField
                  sx={{ width: "100%" }}
                  label="Message"
                  name="message"
                  rows={4}
                  variant="outlined"
                  multiline
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ height: "56px !important", width: "100%" }}
                >
                  Send message
                </Button>
              </Stack>
            </form>
          </div>
        </Grid>
      </Grid>
      <DLSection />
      <Footer />
    </>
  );
};
