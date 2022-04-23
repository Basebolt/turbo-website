import { Stack, Typography } from "@mui/material";
import InView from "react-intersection-observer";

export const ProductFeatures = ({ productFeatures, setCurrFeature, b2 }) => {
  return (
    <Stack spacing={{ xs: 6 }} pt={b2 ? 8 : 0}>
      {productFeatures.map(({ title, desc, illusMobile }, idx) => (
        <InView
          key={idx}
          threshold={0.5}
          onChange={(inView) => (inView ? setCurrFeature(idx) : "")}
        >
          {({ ref, inView }) => {
            return (
              <Stack
                height={b2 ? "auto" : "calc(100vh - 80px)"}
                justifyContent="center"
                alignItems="start"
                width="100%"
              >
                <Stack
                  width={b2 ? "100%" : "380px"}
                  m={b2 ? "auto" : ""}
                  spacing={1}
                  ref={ref}
                >
                  <Typography
                    variant={b2 ? "h4" : "h3"}
                    sx={{
                      fontWeight: 500,
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 400,
                      color: "grey.main",
                    }}
                  >
                    {desc}
                  </Typography>
                  {b2 && (
                    <div data-aos={"zoom-in"} data-aos-delay="100">
                      <Stack
                        sx={{
                          width: "100%",
                          borderRadius: 2,
                          position: "relative",
                          transition: "all ease 0.5s",
                          py: 4,
                        }}
                      >
                        <img
                          src={`${illusMobile}.svg`}
                          width="100%"
                          alt=""
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      </Stack>
                    </div>
                  )}
                </Stack>
              </Stack>
            );
          }}
        </InView>
      ))}
    </Stack>
  );
};
