import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { ScrollBtn } from "./ScrollBtn";

export const ScrollControls = ({ next, back }) => {
  return (
    <Stack spacing={2} direction="row">
      <ScrollBtn icon={<ChevronLeftOutlined />} onClick={back} />
      <ScrollBtn icon={<ChevronRightOutlined />} onClick={next} />
    </Stack>
  );
};
