import styled from "@emotion/styled"

import { colors } from "styles/colors"

interface ButtonComponentStyleProps {
  $isCardButton: boolean
}

export const ButtonComponent = styled.button<ButtonComponentStyleProps>`
  outline: none;
  width: 100%;
  max-width: ${({ $isCardButton }) => 
    $isCardButton ? "210px" : "710px"};
  height: 50px;
  border: ${({ $isCardButton }) =>
    $isCardButton ? "1px solid white" : "none"};
  background-color: ${({ $isCardButton, disabled }) =>
  disabled? colors.GREY :
    $isCardButton ? colors.TRANSPARENT : colors.SEARCH};
  color: ${colors.WHITE};
  font-size: 20px;
  font-weight: bold;
  border-radius: 50px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;
