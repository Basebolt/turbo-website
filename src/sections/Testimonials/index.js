import { Stack, Typography, useMediaQuery } from "@mui/material";
import { useRef } from "react";
import { CardView } from "./CardView";
import { ScrollControls } from "./ScrollControl";

export const Testimonials = () => {
  const b1 = useMediaQuery("(max-width:600px)");
  const b2 = useMediaQuery("(max-width:800px)");
  const ref = useRef(null);

  const back = () => {
    ref.current.goBack();
  };

  const next = () => {
    ref.current.goNext();
  };
  return (
    <Stack
      sx={{
        py: 12,
        m: "auto",
        background: "#efeef0",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Stack spacing={6} width={b1 ? "90%" : "75%"} maxWidth={1270} m="auto">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <div data-aos="fade-right" data-aos-delay="200">
            <Typography variant={b1 ? "h4" : "h3"}>
              See what teachers, students and other professionals have to say
            </Typography>
          </div>
          {!b2 && <ScrollControls next={next} back={back} />}
        </Stack>
        <CardView ref={ref} b1={b1} />
      </Stack>
    </Stack>
  );
};
