import { Stack } from "@mui/material";
import { Box } from "@mui/system";

export const SectionIndicator = ({ currFeature, productFeatures}) => {
  return (
    <Stack
      sx={{
        position: "sticky",
        top: "80px",
        justifyContent: "center",
        height: "calc(100vh - 80px)",
      }}
    >
      <Stack spacing={4}>
        {productFeatures.map((_, idx) => (
          <Box
            key={idx}
            sx={{
              height: "10px",
              width: "10px",
              borderRadius: "100%",
              background: idx === currFeature ? "black" : "rgba(0,0,0,0.3)",
            }}
          ></Box>
        ))}
      </Stack>
    </Stack>
  );
};
