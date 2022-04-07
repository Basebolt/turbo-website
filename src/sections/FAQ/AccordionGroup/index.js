import { Divider, Stack } from "@mui/material";
import Accordion from "../../../components/Accordion";
import { FAQ_ITEMS } from "../../../constants";

export const AccordionGroup = ({ handleChange, expanded }) => {
  return (
    <div data-aos="fade-up" data-aos-delay="400">
      <Stack>
        {FAQ_ITEMS.map(({ title, desc }, idx) => (
          <Accordion
            key={idx}
            title={title}
            desc={desc}
            onChange={handleChange(`panel${idx}`)}
            expanded={expanded === `panel${idx}`}
          />
        ))}
        <Divider />
      </Stack>
    </div>
  );
};
