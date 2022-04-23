import { Grid, Stack, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { PRODUCT_FEATURES } from "../../constants";
import { ImageView } from "./ImageView";
import { ProductFeatures } from "./ProductFeatures";
import { SectionIndicator } from "./SectionIndicator";

export const Product = () => {
  const [currFeature, setCurrFeature] = useState(0);
  const b1 = useMediaQuery("(max-width:1225px)");
  const b2 = useMediaQuery("(max-width:1000px)");

  return (
    <Stack alignItems="center" sx={{ background: "#f8f6f0" }}>
      <Box sx={{ width: "90%" }} maxWidth={1270}>
        <Grid container rowSpacing={{ xs: 8 }}>
          {!b1 && (
            <Grid item lg={1}>
              <SectionIndicator
                currFeature={currFeature}
                productFeatures={PRODUCT_FEATURES}
              />
            </Grid>
          )}
          <Grid item lg={!b1 ? 4 : 5} md={b2 ? 12 : 5}>
            <ProductFeatures
              productFeatures={PRODUCT_FEATURES}
              setCurrFeature={setCurrFeature}
              b2={b2}
            />
          </Grid>
          {!b2 && (
            <Grid item lg={7} md={7}>
              <ImageView
                productFeatures={PRODUCT_FEATURES}
                currFeature={currFeature}
                b1={b1}
              />
            </Grid>
          )}
        </Grid>
      </Box>
    </Stack>
  );
};
