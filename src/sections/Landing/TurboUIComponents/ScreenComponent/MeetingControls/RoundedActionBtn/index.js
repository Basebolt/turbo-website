import { IconButton } from "@mui/material";

import {
  MicNoneOutlined,
  MicOffOutlined,
  VideocamOffOutlined,
  VideocamOutlined,
} from "@mui/icons-material";

const ACTION_ICONS = {
  audio: {
    enabledIcon: <MicNoneOutlined />,
    disabledIcon: <MicOffOutlined />,
  },
  video: {
    enabledIcon: <VideocamOutlined />,
    disabledIcon: <VideocamOffOutlined />,
  },
};

export const RoundedActionBtn = ({ action, handleClick, controls }) => {
  return (
    <IconButton
      onClick={() => handleClick(action)}
      disableRipple={true}
      sx={{
        height: "50px",
        width: "50px",
        background: !controls[action] ? "#000" : "#dee7ec",
        color: !controls[action] && "#fff",
        transition: "all ease 0.2s",
        "&:hover": { background: !controls[action] ? "#000" : "#E4E7EC" },
      }}
    >
      {controls[action]
        ? ACTION_ICONS[action]["enabledIcon"]
        : ACTION_ICONS[action]["disabledIcon"]}
    </IconButton>
  );
};
