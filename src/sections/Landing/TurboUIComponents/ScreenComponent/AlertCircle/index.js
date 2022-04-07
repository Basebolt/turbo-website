import { Notifications } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";

export const AlertCircle = () => {
  return (
    <Stack
      width="60px"
      height="60px"
      alignItems="center"
      justifyContent="center"
      sx={{
        position: "absolute",
        top: "200px",
        right: "80px",
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter:" blur(127.814px)",
        border: "2px solid white",
        borderRadius: "100%",
      }}
    >
      <Box className="anim-shake">
        <Notifications color="action" sx={{ mt: "2px" }} />
      </Box>
    </Stack>
  );
};
