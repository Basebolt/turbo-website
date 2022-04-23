import { Stack, Typography, useMediaQuery } from "@mui/material";
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
          <Stack spacing={4}>
            {PRODUCT.map(({ title, desc }, idx) => (
              <Stack key={idx}  spacing={2}>
                <a href={`#${title.toLowerCase().replaceAll(" ", "-")}`}>
                  <Typography
                    variant="h4"
                    color="black.main"
                    sx={{ fontWeight: 600, textTransform: "capitalize" }}
                  >
                    {title}
                  </Typography>
                </a>
                <Typography variant="body1" color="grey.main">
                  {desc}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <DLSection b1={b1} />
      <Footer />
    </>
  );
};
