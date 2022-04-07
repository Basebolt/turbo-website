import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { EmojiesComponent } from "./EmojiesComponent";
import { Ring } from "./Ring";
import { ScreenComponent } from "./ScreenComponent";

export const TurboUIComponents = ({ b1 }) => {
  const [values, setvalues] = useState([1, 1, 1]);
  const RINGS = [
    { radius: 285, color: "#73BFD2" },
    { radius: 235, color: "#FFBA69" },
    { radius: 185, color: "#FF708B" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setvalues([70, 65, 55]);
    }, 100);
  }, [values]);

  return (
    <Stack
      alignItems={"center"}
      justifyContent="center"
      sx={{
        position: "relative",
        height: "calc(100vh - 80px)",
        width: "100%",
        transform: b1 ? "scale(0.8)" : "scale(0.9)",
        transition: "all ease 0.5s",
      }}
    >
      <Stack
        alignItems="center"
        direction="row"
        spacing={4}
        sx={{
          marginRight: "-200px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: 9,
        }}
      >
        <div data-aos="fade-up" data-aos-delay="1100">
          <ScreenComponent />
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
          <EmojiesComponent />
        </div>
      </Stack>
      <Box>
        <svg className="progress-ring" width="600" height="600">
          {RINGS.map(({ radius, color }, idx) => {
            const circumference = 2 * Math.PI * radius;
            return (
              <Ring
                key={idx}
                radius={radius}
                circumference={circumference}
                percent={values[idx]}
                color={color}
              />
            );
          })}
        </svg>
      </Box>
    </Stack>
  );
};
