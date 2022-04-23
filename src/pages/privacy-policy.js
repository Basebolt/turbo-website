import { Stack, Typography, useMediaQuery } from "@mui/material";
import { PRIVACY_POLICY } from "../constants";
import { DLSection } from "../sections/DLSection";
import { Footer } from "../sections/Footer";

export const PrivacyPolicy = () => {
  const b1 = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Stack width={b1 ? "90%" : "75%"} m="auto" my={6}>
        <Stack spacing={4}>
          <Stack spacing={2} width={b1 ? "100%" : "75%"}>
            <div data-aos="fade-up" data-aos-delay="200">
              <Typography
                variant="p"
                color="primary.main"
                sx={{ textTransform: "uppercase" }}
              >
                Privacy policy
              </Typography>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <Typography variant={b1 ? "h4" : "h3"} sx={{ fontWeight: 500 }}>
                Built with your privacy in mind.
              </Typography>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <Typography variant="body1" color="grey.main">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                egetLorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget
              </Typography>
            </div>
          </Stack>
          <div data-aos="zoom-in" data-aos-delay="800">
            <Stack
              spacing={4}
              p={4}
              borderRadius={4}
              bgcolor="black.main"
              sx={{ color: "white.main" }}
              id="rules"
            >
              <Stack spacing={1}>
                <Typography
                  variant="h6"
                  color="white.main"
                  sx={{
                    fontWeight: 600,
                    textTransform: "uppercase",
                    textDecoration: "underline",
                  }}
                >
                  Note:
                </Typography>
                <Typography variant="body1" color="grey.main">
                  Any of your data collected by the extension is stored locally
                  on your computer and is never sent outside. We respect your
                  privacy
                </Typography>
              </Stack>
              {PRIVACY_POLICY.map(({ title, desc }, idx) => (
                <Stack spacing={1} key={idx}>
                  <Typography variant="p">{title}</Typography>
                  <Typography variant="p" color="grey.main">
                    {desc}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </div>
        </Stack>
      </Stack>
      <DLSection />
      <Footer />
    </>
  );
};
