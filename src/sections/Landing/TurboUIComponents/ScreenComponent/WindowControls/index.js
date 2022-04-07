import { Stack } from "@mui/material";
import { Box } from "@mui/system";

export const WindowControls = () => {
  const DOTS = ["#FF4757", "#FFCC4D", "#36CC84"];

  return (
    <Stack
      direction="row"
      spacing={1}
      width="100%"
      height={32}
      justifyContent="start"
      alignItems="center"
      px={2}
      sx={{
        background: "#1B1A1F",
        filter: "drop-shadow(0px 12.2807px 24.5614px rgba(0, 0, 0, 0.25))",
      }}
    >
      {DOTS.map((elem, idx) => (
        <Box
          key={idx}
          sx={{
            background: elem,
            borderRadius: "100%",
            width: 14,
            height: 14,
          }}
        ></Box>
      ))}
    </Stack>
  );
};
