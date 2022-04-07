import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const FooterLink = React.forwardRef(function FooterLink(
  { children },
  ref,
  ...props
) {
  return (
    <Link
      to={"/" + children.replaceAll(" ", "-").toLowerCase()}
      style={{ textDecoration: "none" }}
    >
      <Typography
        {...props}
        ref={ref}
        variant="body1"
        sx={{
          color: "grey.main",
          fontWeight: 500,
          cursor: "pointer",
          width: "fit-content",
          p: 0.5,
          "&:hover": { textDecoration: "underline" },
        }}
      >
        {children}
      </Typography>
    </Link>
  );
});
