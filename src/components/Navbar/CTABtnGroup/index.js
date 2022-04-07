import { Button } from "../../Button";

export const CTABtnGroup = () => {
  const styleProps = {
    color: "black",
    sx: { width: "148px" },
  };
  return (
    <>
      <Button variant="outlined" {...styleProps}>
        Contact Us
      </Button>
      <Button variant="contained" {...styleProps}>
        Get Premium
      </Button>
    </>
  );
};
