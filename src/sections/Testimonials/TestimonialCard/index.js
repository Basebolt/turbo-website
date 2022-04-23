import { Rating, Stack, Typography } from "@mui/material";

export const TestimonialCard = ({
  name,
  designation,
  rating,
  avatar,
  comment,
  b1,
}) => {
  return (
    <Stack
      spacing={3}
      height={420}
      width={b1 ? "calc(90vw)" : "92%"}
      justifyContent="center"
      sx={{
        scrollSnapAlign: "start",
        background: "white",
        borderRadius: "10px",
        p: 4,
        boxSizing: "border-box",
      }}
    >
      <Rating name="read-only" value={rating} readOnly />
      <Typography variant="h6" sx={{ flex: 1 }}>
        "{comment}"
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <img height={60} src={avatar} alt="" style={{ borderRadius: "100%" }} />
        <Stack>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.main" }}>
            {designation}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
