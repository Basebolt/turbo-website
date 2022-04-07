import { Box } from "@mui/system";
import { RecordComponent } from "../RecordComponent";
import { AlertCircle } from "./AlertCircle";
import { MainContent } from "./MainContent";
import { ParticipantsList } from "./ParticipantsList";
import { WindowControls } from "./WindowControls";

export const ScreenComponent = () => {
  return (
    <Box
      sx={{
        bgcolor: "white.main",
        height: "500px",
        width: "370px",
        borderRadius: 2,
        overflow: "hidden",
        filter: "drop-shadow(0px 12.2807px 24.5614px rgba(0, 0, 0, 0.25))",
      }}
    >
      <WindowControls />
      <RecordComponent />
      <ParticipantsList />
      <AlertCircle />
      <MainContent />
    </Box>
  );
};
