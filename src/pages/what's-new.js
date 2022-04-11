import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { DLSection } from "../sections/DLSection";
import { Footer } from "../sections/Footer";
import { FreeFeatures } from "../sections/FreeFeatures";
import { Premium } from "../sections/Premium";
import { CardGroup } from "../sections/Premium/CardGroup";

export const WhatsNew = () => {
  const b1 = useMediaQuery("(max-width:600px)");
  const b2 = useMediaQuery("(max-width:1040px)");
  return (
    <Stack>
      <Grid container width={b1 ? "90%" : "75%"} m="auto" my={6}>
        <Grid item xs={8} width={b1 ? "100%" : "75%"}>
          <Stack spacing={2}>
            <div data-aos="fade-up" data-aos-delay="400">
              <Typography
                variant="p"
                color="primary.main"
                sx={{ textTransform: "uppercase" }}
              >
                What's new
              </Typography>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <Typography variant={b1 ? "h4" : "h3"} sx={{ fontWeight: 500 }}>
                Our newest update v2.0 is out, <br />
                with 40+ new features!
              </Typography>
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <Typography
                variant="body1"
                color="grey.main"
                sx={{ width: b1 || b2 ? "100%" : "90%" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                egetLorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget
              </Typography>
            </div>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <div data-aos="zoom-in" data-aos-delay="1000">
            <img src="/images/illus/isometric.png" width="100%" alt="" />
          </div>
        </Grid>
      </Grid>
      <Stack py={6} bgcolor="white.main">
        <FreeFeatures />
        <Premium />
      </Stack>
      <DLSection />
      <Footer />
    </Stack>
  );
};
