import styled from "@emotion/styled";

import { colors } from "styles/colors";

interface ButtonComponentStyleProps {
  $isCardButton: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentStyleProps>`
  outline: none;
  width: 100%;
  height: 70px;
  border: none;
  background-color: ${({ $isCardButton }) => {
      if ($isCardButton) {
        return colors.TRANSPARENT;
      } else {
        return colors.PRIMARY_BLUE;
      }
    }
  };
  color: ${colors.WHITE};
  font-size: 20px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
`;
