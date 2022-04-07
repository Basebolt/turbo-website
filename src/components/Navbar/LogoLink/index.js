import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const LogoLink = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <Typography
        variant="h5"
        sx={{ fontFamily: "audiowide", color: "black.main" }}
      >
        Turbo
      </Typography>
    </Link>
  );
};
