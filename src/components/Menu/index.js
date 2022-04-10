import { Box, Divider, Stack, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { NAVBAR_LINKS } from "../../constants";
import { MenuLink } from "./MenuLink";

export const Menu = ({ setIsMenuVisible }) => {
  const b1 = useMediaQuery("(max-width:1132px)");
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  return (
    b1 && (
      <>
        <Box
          sx={{
            position: "fixed",
            top: 80,
            background: "#f2f3f5",
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 99,
            borderTop: "1px solid #ddd",
            animation: "pop ease 0.3s",
          }}
        >
          <Stack m="auto" width="90%" py={2}>
            {NAVBAR_LINKS.map((elem, idx) =>
              typeof elem !== "string" ? (
                <MenuLink
                  key={idx}
                  variant="dropdown"
                  isDropDownVisible={isDropDownVisible}
                  setIsDropDownVisible={setIsDropDownVisible}
                  setIsMenuVisible={setIsMenuVisible}
                >
                  {elem}
                </MenuLink>
              ) : (
                <MenuLink key={idx} setIsMenuVisible={setIsMenuVisible}>
                  {elem}
                </MenuLink>
              )
            )}
          </Stack>
        </Box>
      </>
    )
  );
};
