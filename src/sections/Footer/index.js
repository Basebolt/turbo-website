import { Stack, useMediaQuery } from "@mui/material";
import { FooterBottom } from "./FooterBottom";
import { FooterMiddle } from "./FooterMiddle";
import { FooterTop } from "./FooterTop";

export const Footer = ({ currDownloadLink }) => {
  const b1 = useMediaQuery("(max-width:752px)");
  const b2 = useMediaQuery("(max-width:600px)");
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ background: "#fff" }}
    >
      <Stack width={b2 ? "90%" : "75%"} m="auto" pt={12} pb={8} spacing={8}>
        <FooterTop currDownloadLink={currDownloadLink} b2={b2} />
        <Stack width="100%">
          <FooterMiddle b2={b2} />
          <FooterBottom b1={b1} />
        </Stack>
      </Stack>
    </Stack>
  );
};
