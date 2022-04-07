import { IconButton, Stack } from "@mui/material";
import React from "react";

export const ScrollBtn = ({ icon, onClick }) => {
  return (
    <IconButton sx={{ p: 0 }} onClick={onClick}>
      <Stack
        width={48}
        height={48}
        borderRadius={100}
        alignItems="center"
        justifyContent="center"
        sx={{ border: "1px solid #00000040" }}
      >
        {icon}
      </Stack>
    </IconButton>
  );
};
