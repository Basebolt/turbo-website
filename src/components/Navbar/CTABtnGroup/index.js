import { Link } from "react-router-dom";
import { Button } from "../../Button";

export const CTABtnGroup = () => {
  const styleProps = {
    color: "black",
    sx: { width: "148px" },
  };
  return (
    <>
      <Link to="/contact-us" style={{ textDecoration: "none" }}>
        <Button variant="outlined" {...styleProps}>
          Contact Us
        </Button>
      </Link>
      <Button variant="contained" {...styleProps}>
        Get Premium
      </Button>
    </>
  );
};
