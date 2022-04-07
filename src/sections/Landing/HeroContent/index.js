import { Stack, Typography } from "@mui/material";
import { BiDownload } from "react-icons/bi";

export const HeroContent = ({ b2, b3 }) => {
  return (
    <Stack spacing={2} pt={b3 && 8}>
      <div data-aos="fade-up" data-aos-delay="800">
        {!b3 && (
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            m={b2 && "auto"}
            sx={{ width: "fit-content" }}
          >
            <BiDownload size={24} />
            <Stack direction="row" spacing={0.5}>
              <Typography
                variant="body1"
                sx={{ letterSpacing: "-0.5px", fontWeight: 700 }}
              >
                1k+ Downloads
              </Typography>
              <Typography
                variant="body1"
                sx={{ letterSpacing: "-0.5px", fontWeight: 400 }}
              >
                from 25 countries
              </Typography>
            </Stack>
          </Stack>
        )}
      </div>
      <div data-aos="fade-up" data-aos-delay={b3 ? "100" : "1000"}>
        <Typography
          variant={b3 ? "h3" : "h2"}
          sx={{ textAlign: b3 || b2 ? "center" : "left" }}
        >
          The All-in-one extension for Google Meet
        </Typography>
      </div>
      <div data-aos="fade-up" data-aos-delay={b3 ? "300" : "1200"}>
        <Typography
          variant="h6"
          sx={{
            color: "grey.main",
            textAlign: b3 || b2 ? "center" : "left",
          }}
        >
          Transform your meeting experiences with 40+ new features for Google
          Meet
        </Typography>
      </div>
    </Stack>
  );
};
