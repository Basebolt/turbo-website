import { ArrowForward } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Sublink = ({ icon, color, title, desc }) => {
  return (
    <Link
      to={"/tutorials/" + title.replaceAll(" ", "-").toLowerCase()}
      style={{ textDecoration: "none" }}
    >
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        p={1}
        borderRadius={2}
        sx={{
          cursor: "pointer",
          "&:hover .submenu__arrow": {
            opacity: 1,
            transform: "translateX(5px)",
          },
          "&:hover .submenu__icon": { background: `${color}25` },
        }}
      >
        <Stack
          alignItems="center"
          justifyContent="center"
          borderRadius={2}
          className="submenu__icon"
          sx={{
            background: `${color}15`,
            width: 48,
            height: 48,
            color,
          }}
        >
          {icon}
        </Stack>
        <Stack flex={1}>
          <Typography
            varant="h6"
            color="black.main"
            sx={{
              fontWeight: 500,
              textTransform: "capitalize",
              cursor: "pointer",
            }}
          >
            {title}
          </Typography>
          <Typography varant="body2" color="grey.main">
            {desc}
          </Typography>
        </Stack>
        <ArrowForward
          className="submenu__arrow"
          sx={{ color: "black.main", opacity: 0, transition: "all ease 0.3s" }}
        />
      </Stack>
    </Link>
  );
};
