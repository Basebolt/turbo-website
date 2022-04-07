import { Divider, Stack } from "@mui/material";
import { NAVBAR_LINKS } from "../../../constants";
import { NavLink } from "../NavLink";

export const NavLinkGroup = ({ currNavItem, setCurrNavItem }) => {
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Divider orientation="vertical" color="black" sx={{ height: 36 }} />
      {NAVBAR_LINKS.map((elem, idx) =>
        typeof elem !== "string" ? (
          <NavLink
            key={idx}
            variant="dropdown"
            elem={elem}
            currNavItem={currNavItem}
            setCurrNavItem={setCurrNavItem}
          >
            {Object.keys(elem)[0]}
          </NavLink>
        ) : (
          <NavLink
            key={idx}
            navLinks={NAVBAR_LINKS}
            currNavItem={currNavItem}
            setCurrNavItem={setCurrNavItem}
            elem={elem}
          >
            {elem}
          </NavLink>
        )
      )}
    </Stack>
  );
};
