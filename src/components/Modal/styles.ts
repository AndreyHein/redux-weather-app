import styled from "@emotion/styled";
import { colors } from "styles/colors";

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  
`;

export const ModalComponent = styled.div`
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 710px;
  height: 250px;
  border-radius: 20px;
  margin-bottom: 30px;
  background: linear-gradient(
    133.66deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  box-sizing: border-box;
  backdrop-filter: blur(4px);
`;
