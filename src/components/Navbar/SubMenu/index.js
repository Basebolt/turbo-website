import { Stack } from "@mui/material";
import { Sublink } from "./SubLink";

export const SubMenu = ({ currNavItem, elem }) => {
  return (
    currNavItem && (
      <Stack
        spacing={3}
        p={3}
        borderRadius={2}
        width={410}
        sx={{
          background: "white",
          position: "absolute",
          top: "72px",
          boxShadow: "0px 12.4207px 62.1036px rgba(12, 48, 103, 0.1);",
        }}
      >
        {Object.values(elem)[0].map(({ icon, color, title, desc }, idx) => {
          return (
            <Sublink
              key={idx}
              title={title}
              desc={desc}
              icon={icon}
              color={color}
            />
          );
        })}
      </Stack>
    )
  );
};
