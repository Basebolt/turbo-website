import { Grid } from "@mui/material";
import { FEATURES } from "../../../constants";
import { FeatureCard } from "../FeatureCard";

export const CardGroup = ({ b2 }) => {
  return (
    <Grid container spacing={b2 ? 2 : 3} sx={{ overflow: "hidden" }}>
      {Object.values(FEATURES.premium).map((elem) => {
        return Object.values(elem).map(({ name, desc, icon, color }, idx) => (
          <Grid item lg={6} md={6} xs={12} key={idx}>
            <div
              data-aos={
                b2 ? `fade-up-${idx % 2 === 0 ? "right" : "left"}` : `flip-up`
              }
              data-aos-delay={idx * 100}
            >
              <FeatureCard variant="premium" title={name} desc={desc} icon={icon} color={color} />
            </div>
          </Grid>
        ));
      })}
    </Grid>
  );
};
