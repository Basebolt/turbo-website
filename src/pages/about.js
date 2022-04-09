import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { Footer } from "../sections/Footer";
import { DLSection } from "../sections/DLSection";
import { StatSection } from "../sections/StatSection";

export const About = () => {
  const b1 = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Stack width={b1 ? "90%" : "75%"} m="auto" my={6}>
        <Stack spacing={4}>
          <Stack spacing={2} width={b1 ? "100%" : "75%"}>
            <div data-aos="fade-up" data-aos-delay="400">
              <Typography
                variant="p"
                color="primary.main"
                sx={{ textTransform: "uppercase" }}
              >
                Our Mission
              </Typography>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <Typography variant={b1 ? "h4" : "h3"} sx={{ fontWeight: 500 }}>
                Bridging the gap between you and your audience, in this
                new-normal
              </Typography>
            </div>
          </Stack>
          <div data-aos="zoom-in" data-aos-delay="800">
            <img
              width="100%"
              src="/images/illus/illus4.svg"
              alt=""
              style={{ borderRadius: "5px" }}
            />
          </div>
        </Stack>
        <div data-aos="fade-up" data-aos-delay="1000">
          <Grid
            width="100%"
            container
            my={8}
            spacing={2}
            direction={b1 ? "column" : "row"}
          >
            <Grid item xs={6}>
              <Typography
                variant={b1 ? "h4" : "h3"}
                sx={{ fontWeight: 500, width: b1 ? "100%" : "70%" }}
              >
                Built by students, for students & teachers alike
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                color="grey.main"
                sx={{ width: b1 ? "100%" : "90%", float: "right" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Stack>
      <StatSection b1={b1} />
      <DLSection b1={b1} />
      <Footer />
    </>
  );
};
