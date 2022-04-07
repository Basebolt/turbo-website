import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

export const RecordComponent = () => {
  const [seconds, setSeconds] = useState(160);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function toHHMMSS(secs) {
    var sec_num = parseInt(secs, 10); // don't forget the second param
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - hours * 3600) / 60);
    var seconds = sec_num - hours * 3600 - minutes * 60;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }

  return (
    <Stack
      p={1.5}
      alignItems="center"
      justifyContent="center"
      spacing={1}
      direction="row"
      sx={{
        width: "fit-content",
        height: "fit-content",
        background: "#000",
        borderRadius: 100,
        transform: "scale(0.7)",
        position: "absolute",
        top: "60px",
        left: "10px",
      }}
    >
      <Box
        sx={{
          height: 18,
          width: 18,
          background: "#FF4757",
          borderRadius: "100%",
          animation: "blink ease 1.5s infinite",
        }}
      ></Box>
      <Typography color="white.main" variant="p" width="40px" pt={0.1}>
        {toHHMMSS(seconds)}
      </Typography>
    </Stack>
  );
};
