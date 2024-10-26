import styled from "@emotion/styled";

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
  border: 2px solid black;
  width: 570px;
  min-height: 400px;
  max-height: 700px;
  box-shadow: 1px 2px 10px black;
  padding: 40px;
  background-color: white;
  overflow-y: auto;
`;
