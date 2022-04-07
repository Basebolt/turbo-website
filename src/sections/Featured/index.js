import { Stack, useMediaQuery } from "@mui/material";
import { SPONSORS } from "../../constants";

export const Featured = () => {
  const b1 = useMediaQuery("(max-width:600px)");

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      py={b1 ? 4 : 0}
      sx={{ background: "#110F14", height: 240, width: "100%" }}
    >
      <Stack
        direction="row"
        justifyContent={b1 ? "center" : "space-between"}
        width="75%"
        flexWrap="wrap"
        rowspacing={2}
      >
        {SPONSORS.map(({ name, wordmark }, idx) => (
          <img
            key={idx}
            height={60}
            src={wordmark}
            alt={name}
            style={{ padding: "4px" }}
          />
        ))}
      </Stack>
    </Stack>
  );
};
