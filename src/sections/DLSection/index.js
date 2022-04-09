import { ArrowRightAlt } from "@mui/icons-material";
import { Grid, Stack, Typography } from "@mui/material";
import { Button } from "../../components/Button";

export const DLSection = ({ b1 }) => {
  return (
    <Stack width="100%" height="280px" sx={{ background: "#d8e9f3" }}>
      <Grid
        container
        m="auto"
        width="75%"
        alignItems="center"
        direction={b1 ? "column" : "row"}
        spacing={3}
      >
        <Grid item md={6} lg={6}>
          <Stack spacing={1} sx={{ textAlign: b1 ? "center" : "left" }}>
            <Typography variant="h3" sx={{ fontWeight: 500 }}>
              Get started now
            </Typography>
            <Typography variant="body1" color="grey.main">
              Experience better meetings instantly
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={6} lg={6}>
          <Stack alignItems="end" width={b1 ? "fit-content" : "100%"}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowRightAlt />}
              sx={{ height: "64px !important", width: "184px" }}
            >
              Download
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
