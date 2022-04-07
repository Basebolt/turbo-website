import { Stack } from "@mui/material";
import { useState } from "react";
import { EndCallBtn } from "./EndCallBtn";
import { RoundedActionBtn } from "./RoundedActionBtn";

export const MeetingControls = () => {
  const [controls, setControls] = useState({
    audio: true,
    video: true,
  });
  const handleClick = (target) => {
    setControls({ ...controls, [target]: !controls[target] });
  };
  return (
    <Stack spacing={2} direction="row" pt={2}>
      <RoundedActionBtn
        action="audio"
        controls={controls}
        handleClick={handleClick}
      />
      <EndCallBtn />
      <RoundedActionBtn
        action="video"
        controls={controls}
        handleClick={handleClick}
      />
    </Stack>
  );
};
