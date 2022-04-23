import { Grid, Stack, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import DLBtn from "./DLBtn";
import { HeroContent } from "./HeroContent";
import { TurboUIComponents } from "./TurboUIComponents";
import { ScreenComponent } from "./TurboUIComponents/ScreenComponent";

export const Landing = ({ currDownloadLink, ExtensionAvailability }) => {
  const b1 = useMediaQuery("(max-width:1148px)");
  const b2 = useMediaQuery("(max-width:964px)");
  const b3 = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{  position: "relative" }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        maxWidth={1270} m="auto"
        py={5}
        sx={{
          width: `${b1 ? "90%" : "75%"}`,
          height: "100%",
        }}
      >
        <Grid item lg={6} md={6}>
          <Stack spacing={5} width="365px">
            <HeroContent b2={b2} b3={b3} />
            <DLBtn
              ExtensionAvailability={ExtensionAvailability}
              currDownloadLink={currDownloadLink}
              b3={b3}
            />
          </Stack>
        </Grid>
        {!b2 && (
          <Grid item lg={6} md={6} sx={{ position: "relative" }}>
            <TurboUIComponents b1={b1} />
          </Grid>
        )}
        {b3 && (
          <Grid item lg={6} md={6} sx={{ position: "relative" }}>
            <Box sx={{ pt: 4, pb: 6 }}>
              <div data-aos="zoom-in" data-aos-delay="1800">
                <ScreenComponent />
              </div>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};
