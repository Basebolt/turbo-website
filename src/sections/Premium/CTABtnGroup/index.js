import { Stack } from "@mui/material";
import { Button } from "../../../components/Button";

export const CTABtnGroup = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        color="white"
        sx={{ height: "48px !important", width: "148px" }}
      >
        Learn more
      </Button>
      <Button
        variant="contained"
        color="white"
        sx={{ height: "48px !important", width: "148px" }}
      >
        Get Premium
      </Button>
    </Stack>
  );
};
