import { Stack, Typography, useMediaQuery } from "@mui/material";
import { CardGroup } from "./CardGroup";

export const FreeFeatures = () => {
  const b1 = useMediaQuery("(max-width:1080px)");
  const b2 = useMediaQuery("(max-width:600px)");

  return (
    <Stack
      pt={6}
      pb={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        bgcolor: "white.main",
      }}
    >
      <Stack
        width={b2 ? "95%" : "75%"}
        alignItems="start"
        p={b2 ? 2 : 8}
        pt={b2 ? 6 : "auto"}
        sx={{
          background: "#d3eae2",
          borderRadius: 4,
          boxSizing: "border-box",
        }}
      >
        <Stack
          spacing={4}
          pb={6}
          width="100%"
          direction={b1 ? "column" : "row"}
          alignItems={b2 ? "center" : b1 ? "start" : "center"}
          justifyContent="space-between"
        >
          <Stack
            spacing={0.5}
            sx={{ textAlign: b2 ? "center" : "left", width: "90%" }}
          >
            <Typography variant="h3" sx={{ fontWeight: 500, color: "black.main" }}>
              Free Features
            </Typography>
            <Typography variant="h6" sx={{ color: "#677B8C" }}>
              Experience more productive meetings with premium features
            </Typography>
          </Stack>
        </Stack>
        <CardGroup b2={b2} />
      </Stack>
    </Stack>
  );
};
