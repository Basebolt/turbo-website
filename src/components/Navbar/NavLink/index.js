import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SubMenu } from "../SubMenu";

export const NavLink = ({
  variant,
  currNavItem,
  children,
  elem,
  setCurrNavItem,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.5}
      onMouseEnter={() => setCurrNavItem(elem)}
      onMouseLeave={() => setCurrNavItem(null)}
    >
      {variant === "dropdown" ? (
        <>
          <Typography
            variant="p"
            color={currNavItem === elem ? "black.main" : "grey.main"}
            sx={{
              textTransform: "capitalize",
              py: 3,
              cursor: "pointer",
            }}
          >
            {children}
          </Typography>
          <KeyboardArrowDownOutlined
            sx={{
              color: currNavItem === elem ? "black.main" : "grey.main",
              transform:
                currNavItem === elem ? "rotate(180deg)" : "rotate(0deg)",
              transition: "all ease 0.3s",
            }}
          />
          <SubMenu currNavItem={currNavItem} elem={elem} />
        </>
      ) : (
        <Link to={"/" + currNavItem} style={{ textDecoration: "none" }}>
          <Typography
            variant="p"
            color={currNavItem === elem ? "black.main" : "grey.main"}
            sx={{
              textTransform: "capitalize",
              py: 3,
              cursor: "pointer",
            }}
          >
            {children.replace("-"," ")}
          </Typography>
        </Link>
      )}
    </Stack>
  );
};
