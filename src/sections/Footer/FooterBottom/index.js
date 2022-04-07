import { Stack, Typography } from "@mui/material";
import { SocialLinks } from "./SocialLinks";

export const FooterBottom = ({ b1 }) => {
  return (
    <Stack
      direction={b1 ? "column" : "row"}
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      spacing={2}
    >
      <Typography variant="h5" sx={{ fontFamily: "audiowide" }}>
        Turbo
      </Typography>
      <Stack direction="row" spacing={0.5}>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          ©2022 Turbo —
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "grey.main", fontWeight: 500 }}
        >
          All Rights Reserved
        </Typography>
      </Stack>
      <SocialLinks />
    </Stack>
  );
};
