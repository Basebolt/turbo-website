import { CallEnd } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const EndCallBtn = () => {
  return (
    <IconButton
      sx={{
        color: "#fff",
        background: "#FF4757",
        width: "80px",
        height: "50px",
        borderRadius: 10,
        " &:hover": {
          background: "#FF4757",
        },
      }}
    >
      <CallEnd />
    </IconButton>
  );
};
