import { PlayArrow } from "@mui/icons-material";
import { Stack } from "@mui/material";
import React from "react";
import { Button } from "../../../components/Button";

export default function DLBtn({ ExtensionAvailability, currDownloadLink, b3 }) {
  return (
    <div data-aos="fade-right" data-aos-delay="1500">
      {!b3 ? (
        <Stack
          direction="row"
          spacing={2.5}
          alignItems="center"
          sx={{
            borderRadius: "100px",
            height: "fit-content",
            width: "fit-content",
          }}
        >
          <Button
            variant="contained"
            onClick={() => setTimeout(() => window.open(currDownloadLink), 700)}
            sx={{ height: "56px !important", width: "164px" }}
            disabled={currDownloadLink !== "" ? false : true}
          >
            Get Extension
          </Button>
          <Button
            variant="outlined"
            startIcon={<PlayArrow />}
            color="grey"
            sx={{
              height: "56px !important",
              width: "164px",
              color: "black.main",
            }}
            disabled={currDownloadLink !== "" ? false : true}
          >
            Watch Video
          </Button>
        </Stack>
      ) : (
        <Stack spacing={2} width={"85%"} m="auto">
          {/* <Button
            variant="contained"
            onClick={() => setTimeout(() => window.open(currDownloadLink), 700)}
            sx={{ px: 3 }}
            disabled={currDownloadLink !== "" ? false : true}
          >
            Get Extension
          </Button>
          <Button startIcon={<PlayArrow />} variant="outlined" sx={{ px: 3 }}>
            Watch video
          </Button> */}
        </Stack>
      )}
    </div>
  );
}
