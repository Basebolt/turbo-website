import { Chip, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const FeatureCard = ({
  variant,
  title,
  desc,
  icon,
  newRelease,
  color,
}) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          height: "260px",
          width: "100%",
          bgcolor: variant === "free" ? "white.main" : "#ffffff10",
          borderRadius: 3,
          m: "auto",
        }}
      >
        {newRelease && (
          <Chip
            label="New"
            color="primary"
            sx={{ position: "absolute", top: "20px", right: "30px", px: 0.7 }}
          />
        )}
        <Stack spacing={4} width="85%">
          <Stack
            alignItems="center"
            justifyContent="center"
            borderRadius={2}
            sx={{
              background: variant === "free" ? "#314C5C" : color,
              color: "white.main",
              width: 56,
              height: 56,
            }}
          >
            {icon}
          </Stack>
          <Stack spacing={0.5}>
            <Typography
              variant="h4"
              color={variant === "free" ? "black.main" : "white.main"}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color={variant === "free" ? "#677B8C" : "#B8C5DC"}
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
