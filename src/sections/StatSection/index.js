import { Stack, Typography } from "@mui/material";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { QUICK_STATS } from "../../constants";

export const StatSection = ({ b1 }) => {
  return (
    <Stack
      width="100%"
      height={b1 ? "fit-content" : "280px"}
      sx={{ background: "#f8f6f0" }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        width="75%"
        m="auto"
        gap={2}
        alignItems="center"
        flexWrap="wrap"
      >
        {QUICK_STATS.map(({ stat, desc, plus, sep, load, postfix }, idx) => (
          <Stack
            key={idx}
            p={2}
            sx={{ textAlign: "center" }}
            spacing={1}
            m={b1 ? "auto" : ""}
          >
            <Typography
              variant={b1 ? "h3" : "h2"}
              sx={{ fontFamily: "audiowide" }}
            >
              {load ? (
                <CountUp
                  start={stat - (stat / 100) * 50}
                  end={stat}
                  separator={sep && ","}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
              ) : (
                stat
              )}
              {postfix}
              {plus && "+"}
            </Typography>
            <Typography variant="h6" color="grey.main">
              {desc}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
