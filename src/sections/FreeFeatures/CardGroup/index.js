import { Grid } from "@mui/material";
import { FEATURES } from "../../../constants";
import { FeatureCard } from "../../Premium/FeatureCard";

export const CardGroup = ({ b2 }) => {
  return (
    <Grid container spacing={b2 ? 2 : 3} sx={{ overflow: "hidden" }}>
      {Object.values(FEATURES.free).map((elem) => {
        return Object.values(elem).map(
          ({ name, desc, icon, newRelease }, idx) => (
            <Grid item lg={6} md={6} xs={12} key={idx}>
              <div
                data-aos={
                  b2 ? `fade-up-${idx % 2 === 0 ? "right" : "left"}` : `flip-up`
                }
                data-aos-delay={idx * 100}
              >
                <FeatureCard
                  variant="free"
                  title={name}
                  desc={desc}
                  icon={icon}
                  newRelease={newRelease}
                />
              </div>
            </Grid>
          )
        );
      })}
    </Grid>
  );
};
