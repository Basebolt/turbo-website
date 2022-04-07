import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SubLink } from "./SubLink";

export const MenuLink = ({
  variant,
  children,
  setIsDropDownVisible,
  isDropDownVisible,
  setIsMenuVisible,
}) => {
  return variant === "dropdown" ? (
    <Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setIsDropDownVisible(!isDropDownVisible)}
      >
        <Typography
          variant="h6"
          color="black.main"
          sx={{
            textTransform: "capitalize",
            py: 2,
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          {Object.keys(children)[0]}
        </Typography>
        <KeyboardArrowDownOutlined
          sx={{
            color: "black.main",
            transform: isDropDownVisible ? "rotate(180deg)" : "rotate(0deg)",
            transition: "all ease 0.3s",
            cursor: "pointer",
          }}
        />
      </Stack>
      {isDropDownVisible && (
        <Stack spacing={2}>
          {Object.values(children)[0].map(({ title }, idx) => {
            return (
              <SubLink key={idx} setIsMenuVisible={setIsMenuVisible}>
                {title}
              </SubLink>
            );
          })}
        </Stack>
      )}
    </Stack>
  ) : (
    <Link
      to={"/" + children}
      style={{ textDecoration: "none" }}
      onClick={() => setIsMenuVisible(false)}
    >
      <Typography
        variant="h6"
        color="black.main"
        sx={{
          textTransform: "capitalize",
          py: 2,
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        {children.replace("-", " ")}
      </Typography>
    </Link>
  );
};
