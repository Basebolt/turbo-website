import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { LogoLink } from "./LogoLink";
import { MenuBtn } from "./MenuBtn";
import { NavLinkGroup } from "./NavLinkGroup";
import { CTABtnGroup } from "./CTABtnGroup";
import { useMediaQuery } from "@mui/material";

export const Navbar = ({ isMenuVisible, setIsMenuVisible }) => {
  const [currNavItem, setCurrNavItem] = useState(null);
  const b1 = useMediaQuery("(max-width:1132px)");
  const b2 = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (isMenuVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  });

  return (
    <Stack
      height="80px"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 99,
        background: "rgba(242,243,245,0.8)",
        backdropFilter: "blur(20px)",
        boxShadow: "rgb(0 0 0 / 0%) 0px 30px 60px -10px",
      }}
    >
      <Box sx={{ width: "90%", margin: "auto" }}>
        <Stack
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Stack direction="row" spacing={5} alignItems="center">
            <LogoLink />
            {!b1 && (
              <NavLinkGroup
                currNavItem={currNavItem}
                setCurrNavItem={setCurrNavItem}
              />
            )}
          </Stack>
          <Stack spacing={2} direction="row">
            {!b2 && <CTABtnGroup />}
            {(b2 || b1) && (
              <MenuBtn
                isMenuVisible={isMenuVisible}
                setIsMenuVisible={setIsMenuVisible}
              />
            )}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
