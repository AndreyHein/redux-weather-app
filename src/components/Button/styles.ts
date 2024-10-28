import styled from "@emotion/styled"

import { colors } from "styles/colors"

interface ButtonComponentStyleProps {
  $isCardButton: boolean
}

export const ButtonComponent = styled.button<ButtonComponentStyleProps>`
  outline: none;
  width: 100%;
  height: 50px;
  border: ${({ $isCardButton }) =>
    $isCardButton ? "1px solid white" : "none"};
  background-color: ${({ $isCardButton }) =>
    $isCardButton ? colors.TRANSPARENT : colors.PRIMARY_BLUE};
  color: ${colors.WHITE};
  font-size: 20px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
`
