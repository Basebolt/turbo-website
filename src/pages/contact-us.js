import {
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Button } from "../components/Button";

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
            <Typography
              variant="p"
              color="primary.main"
              sx={{ textTransform: "uppercase" }}
            >
              Contact us
            </Typography>
            <Typography
              variant={b1 ? "h4" : "h3"}
              sx={{
                fontWeight: 500,
              }}
            >
              We're listening :)
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                color: "grey.main",
              }}
            >
              We’re here to help. Ask us about the product,
              <br /> our services, and any questions you have.
            </Typography>
          </Stack>
        </Grid>
        <Grid item lg={7} width="100%">
          <form name="contact" action="POST" data-netlify="true">
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

              <TextField
                sx={{ width: "100%" }}
                label="Email"
                name="email"
                type="email"
                variant="outlined"
              />
              <TextField
                sx={{ width: "100%" }}
                label="Message"
                name="message"
                rows={4}
                variant="outlined"
                multiline
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
        </Grid>
      </Grid>
    </>
  );
};
