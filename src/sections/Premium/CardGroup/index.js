import { Grid } from "@mui/material";
import { PREMIUM_FEATURES } from "../../../constants";
import { FeatureCard } from "../FeatureCard";

export const CardGroup = ({ b2 }) => {
  return (
    <Grid container spacing={b2 ? 2 : 3} sx={{ overflow: "hidden" }}>
      {PREMIUM_FEATURES.map(({ title, desc, icon, color }, idx) => (
        <Grid item lg={6} md={6} xs={12} key={idx}>
          <div
            data-aos={
              b2 ? `fade-up-${idx % 2 === 0 ? "right" : "left"}` : `flip-up`
            }
            data-aos-delay={idx * 100}
          >
            <FeatureCard title={title} desc={desc} icon={icon} color={color} />
          </div>
        </Grid>
      ))}
    </Grid>
  );
};
