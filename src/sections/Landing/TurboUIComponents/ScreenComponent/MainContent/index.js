import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { MeetingControls } from "../MeetingControls";

export const MainContent = () => {
  const [hasImageLoaded, setHasImageLoaded] = useState(false);

  return (
    <Stack spacing={2} alignItems="center" pt={4}>
      <img
        src="/images/avatars/screen-avatar.png"
        onLoad={() => setHasImageLoaded(true)}
        alt=""
        width="160px"
        style={{ display: hasImageLoaded ? "" : "none" }}
      />
      <Stack
        justifyContent="end"
        sx={{
          height: "190px",
          display: hasImageLoaded ? "none" : "display",
        }}
      >
        <Box
          sx={{
            height: "160px",
            width: "160px",
            borderRadius: "100%",
            background: "#E4E7EC",
            zIndex: -1,
          }}
        ></Box>
      </Stack>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          textAlign: "center",
          letterSpacing: "-1px",
        }}
      >
        Gavin Mitchel
      </Typography>
      <Box
        sx={{
          width: "70%",
          height: "16px",
          borderRadius: 5,
          background: "#EEF3FB",
        }}
      ></Box>
      <Box
        sx={{
          width: "50%",
          height: "16px",
          borderRadius: 5,
          background: "#EEF3FB",
        }}
      ></Box>
      <MeetingControls />
    </Stack>
  );
};
