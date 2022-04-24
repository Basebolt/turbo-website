import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { PRODUCT } from "../constants";
import { DLSection } from "../sections/DLSection";
import { Footer } from "../sections/Footer";

export const Product = () => {
  const b1 = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Stack width={b1 ? "90%" : "75%"} m="auto" mt={6} mb={8}>
        <Stack spacing={3}>
          <Typography
            variant="p"
            color="primary.main"
            sx={{ textTransform: "uppercase" }}
          >
            Product
          </Typography>
          <Stack gap={4}>
            {PRODUCT.map(({ title, desc }, idx) => (
              <Box
                mt={-12}
                pt={12}
                id={title.toLowerCase().replaceAll(" ", "-")}
              >
                <Stack key={idx} spacing={2}>
                  <Typography
                    variant="h4"
                    color="black.main"
                    sx={{ fontWeight: 600, textTransform: "capitalize" }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body1" color="grey.main">
                    {desc}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <DLSection b1={b1} />
      <Footer />
    </>
  );
};
