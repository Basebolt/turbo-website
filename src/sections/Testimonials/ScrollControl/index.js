import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { ScrollBtn } from "./ScrollBtn";

export const ScrollControls = ({ scroll }) => {
  return (
    <Stack spacing={2} direction="row">
      <ScrollBtn
        icon={<ChevronLeftOutlined />}
        onClick={() => scroll(-372)}
      />
      <ScrollBtn
        icon={<ChevronRightOutlined />}
        onClick={() => scroll(372)}
      />
    </Stack>
  );
};
