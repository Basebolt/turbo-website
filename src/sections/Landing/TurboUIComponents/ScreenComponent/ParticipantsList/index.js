import { Person } from "@mui/icons-material";
import { Skeleton, Stack } from "@mui/material";

export const ParticipantsList = () => {
  return (
    <Stack
      width="120px"
      height="105px"
      spacing={2}
      p={1.5}
      sx={{
        position: "absolute",
        top: "140px",
        left: "20px",
        background: "rgba(255, 255, 255, 0.3)",
        backdropFilter:"blur(127.814px)",
        borderRadius: 2,
        transform: "scale(0.8)",
      }}
    >
      {[1, 1, 1].map((_, idx) => (
        <Stack direction="row" spacing={1} key={idx}>
          <Stack
            alignItems="center"
            justifyContent="center"
            height="24px"
            width="24px"
            sx={{ background: "#5D95E8", color: "#fff", borderRadius: 2 }}
          >
            <Person />
          </Stack>
          <Stack direction="column" width="100%">
            <Skeleton
              sx={{
                height: "12px",
                bgcolor: "#fff",
              }}
            />
            <Skeleton
              sx={{
                height: "12px",
                width: "70%",
                bgcolor: "#fff",
              }}
            />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
