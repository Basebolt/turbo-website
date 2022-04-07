import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS } from "../../../../constants";

export const SocialLinks = () => {
  return (
    <Stack direction="row" spacing={2}>
      {SOCIAL_LINKS.map(({ platform, icon, url }, idx) => (
        <Link to={url} key={idx}>
          <img src={icon} width={32} height={32} alt={platform} />
        </Link>
      ))}
    </Stack>
  );
};
