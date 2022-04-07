import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const SubLink = ({ children, setIsMenuVisible }) => {
  return (
    <Link
      to={"/tutorials/" + children.replaceAll(" ", "-").toLowerCase()}
      style={{ textDecoration: "none" }}
      onClick={() => setIsMenuVisible(false)}
    >
      <Typography
        variant="body1"
        color="grey.main"
        sx={{
          py: 1,
          textTransform: "capitalize",
          fontWeight: 500,
          cursor: "pointer",
          "&:hover": { color: "primary.main" },
        }}
      >
        {children}
      </Typography>
    </Link>
  );
};
