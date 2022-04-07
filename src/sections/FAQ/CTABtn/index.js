import { Typography } from "@mui/material";

export const CTABtn = () => {
  return (
    <Typography
      variant="h6"
      sx={{
        color: "primary.main",
        fontWeight: 400,
        cursor: "pointer",
        width: "fit-content",
        "&:hover": { textDecoration: "underline" },
      }}
    >
      Contact Us
    </Typography>
  );
};
