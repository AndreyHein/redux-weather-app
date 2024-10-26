import styled from "@emotion/styled";

import { colors } from "styles/colors";

export interface InputComponentStyleProps {
  $error?: string | undefined;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputComponent = styled.input<InputComponentStyleProps>`
  width: 100%;
  height: 50px;
  border: ${({ $error, disabled }) => {
    if (disabled) {
      return `1px solid ${colors.GREY}`;
    } else {
      if ($error !== undefined) {
        return `2px solid ${colors.ERROR}`;
      } else {
        return `1px solid ${colors.WHITE}`;
      }
    }
  }};
  border-radius: 50px;
  padding: 12px;
  outline: none;
  color: ${colors.WHITE};

  &::placeholder {
    color: ${colors.WHITE};
    font-size: 16px;
  }
`;

export const ErrorContainer = styled.p`
  font-size: 18px;
  color: ${colors.ERROR};
`;