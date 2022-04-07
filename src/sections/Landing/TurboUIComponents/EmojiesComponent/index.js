import { AddOutlined } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import { EMOJIES } from "../../../../constants";

export const EmojiesComponent = () => {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{
        filter: "drop-shadow(0px 12.2807px 24.5614px rgba(0, 0, 0, 0.25))",
      }}
    >
      <Stack
        direction="column"
        spacing={2}
        p={2}
        width="72px"
        sx={{
          boxSizing: "border-box",
          background: "white",
          borderRadius: 2,
        }}
      >
        {EMOJIES.map((elem, idx) => (
          <img
            className="anim-zoomInOut"
            style={{ "--order": idx + 1 }}
            src={elem.icon}
            key={idx}
            alt={elem.alt}
            height={40}
            width={40}
          />
        ))}
      </Stack>
      <img
        src="/images/illus/connector.svg"
        alt=""
        width="40px"
        style={{
          marginTop: "-1px",
          marginBottom: "-1px",
        }}
      />
      <IconButton
        sx={{
          background: "white",
          borderRadius: 2,
          width: "72px",
          height: "56px",
          "& svg": {
            transition: "all ease 0.3s",
          },
          "&:hover": { background: "#fff" },
          "&:hover svg": { transform: "rotate(45deg)" },
        }}
      >
        <AddOutlined />
      </IconButton>
    </Stack>
  );
};
