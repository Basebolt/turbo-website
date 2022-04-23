import { Grid, Stack, Typography } from "@mui/material";
import { Tooltip } from "../../../components/Tooltip";
import { FOOTER_LINKS } from "../../../constants";
import { FooterLink } from "../FooterLink";

export const FooterMiddle = ({ b2 }) => {
  return (
    <Grid container direction={b2 ? "column" : "row"}>
      {Object.keys(FOOTER_LINKS).map((category, idx) => (
        <Grid item lg={3} md={3} xs={6} key={idx}>
          <Stack spacing={3} pb={6}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 500, textTransform: "capitalize" }}
            >
              {category}
            </Typography>
            {FOOTER_LINKS[category].map(({ item, path, url }, idx) => {
              return item === "Roadmap" ? (
                <Tooltip
                  key={idx}
                  title="10+ new features"
                  open={true}
                  placement="right"
                  arrow
                >
                  <FooterLink url={url} path={path}>
                    {item}
                  </FooterLink>
                </Tooltip>
              ) : (
                <FooterLink key={idx} url={url} path={path}>
                  {item}
                </FooterLink>
              );
            })}
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
