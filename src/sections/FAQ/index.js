import { Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AccordionGroup } from "./AccordionGroup";
import { CTABtn } from "./CTABtn";

export const FAQ = () => {
  const b1 = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const [expanded, setExpanded] = useState("panel0");
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      py={8}
      sx={{
        background: "#fff",
        width: "100%",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent={matches ? "start" : "center"}
        width={b1 ? "100%" : "75%"}
      >
        <Grid item lg={7} width="100%">
          <Stack spacing={4} pb={4} width={b1 ? "90%" : "100%"} m="auto">
            <div data-aos="fade-up" data-aos-delay="100">
              <Typography variant={b1 ? "h4" : "h3"}>
                Frequently Asked
                <br /> Questions
              </Typography>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 400, color: "grey.main" }}
                >
                  Haven’t found what you’re looking for?
                </Typography>
                <CTABtn />
              </Stack>
            </div>
          </Stack>
        </Grid>
        <Grid item lg={5}>
          <AccordionGroup expanded={expanded} handleChange={handleChange} />
        </Grid>
      </Grid>
    </Stack>
  );
};
