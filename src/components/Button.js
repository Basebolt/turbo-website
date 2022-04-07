import ButtonMaterial from "@mui/material/Button";
import styled from "styled-components";

export const Button = styled(ButtonMaterial)`
  border-radius: 100px;
  text-transform: none;
  box-shadow: none;
  height: 48px;

  &:hover {
    box-shadow: none;
  }
`;
