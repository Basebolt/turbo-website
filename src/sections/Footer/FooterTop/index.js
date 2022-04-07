import { Divider, Stack, Typography } from "@mui/material";
import { Button } from "../../../components/Button";

export const FooterTop = ({ currDownloadLink, b2 }) => {
  return (
    <Stack spacing={4} width="100%">
      <Stack
        alignItems="center"
        justifyContent="space-between"
        direction={b2 ? "column" : "row"}
        width="100%"
        spacing={4}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            textAlign: b2 ? "center" : "normal",
          }}
        >
          Ready to take your meetings
          <br /> to the next level?
        </Typography>
        <Button
          variant="contained"
          color="black"
          onClick={() => window.open(currDownloadLink)}
          sx={{ height: "56px !important", width: "164px" }}
        >
          Download
        </Button>
      </Stack>
      <Divider width="100%" />
    </Stack>
  );
};
