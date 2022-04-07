import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const FeatureCard = ({ title, desc, icon, color }) => {
  return (
    <Box>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "260px",
          width: "100%",
          background: "#ffffff10",
          borderRadius: 3,
          m: "auto",
        }}
      >
        <Stack spacing={4} width="85%">
          <Stack
            alignItems="center"
            justifyContent="center"
            borderRadius={2}
            sx={{ background: color, color: "#fff", width: 56, height: 56 }}
          >
            {icon}
          </Stack>
          <Stack spacing={0.5}>
            <Typography variant="h4" color="#fff">
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="#B8C5DC"
              sx={{ fontWeight: 400 }}
            >
              {desc}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
