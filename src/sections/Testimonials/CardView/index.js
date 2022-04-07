import { Stack } from "@mui/material";
import { forwardRef } from "react";
import { REVIEWS } from "../../../constants";
import { TestimonialCard } from "../TestimonialCard";

export const CardView = forwardRef(({ b1 }, ref) => {
  return (
    <Stack
      ref={ref}
      direction="row"
      sx={{
        overflowY: "hidden",
        overflowX: "scroll",
        scrollSnapType: "x mandatory",
        "&::-webkit-scrollbar": { display: "none" },
      }}
      spacing={2}
    >
      {REVIEWS.map(({ name, designation, rating, comment, avatar }, idx) => (
        <div key={idx} data-aos="fade-up" data-aos-delay={300 + idx * 100}>
          <TestimonialCard
            name={name}
            designation={designation}
            rating={rating}
            comment={comment}
            avatar={avatar}
            b1={b1}
          />
        </div>
      ))}
    </Stack>
  );
});
