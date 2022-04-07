import { Stack, Typography } from "@mui/material";

export const AvailabilityBadge = ({ value }) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        background: "#f61067",
        color: "#fff",
        height: "15px",
        width: "30px",
        borderRadius: 1,
        position: "absolute",
        bottom: 0,
        left: 10,
      }}
    >
      <Typography variant="caption">{value}</Typography>
    </Stack>
  );
};
