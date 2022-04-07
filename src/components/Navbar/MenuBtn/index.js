import { Close, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const MenuBtn = ({ isMenuVisible, setIsMenuVisible }) => {
  return (
    <IconButton
      onClick={() => {
        setIsMenuVisible(!isMenuVisible);
      }}
    >
      {isMenuVisible ? <Close /> : <Menu />}
    </IconButton>
  );
};
