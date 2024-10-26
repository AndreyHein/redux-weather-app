import { ModalProps } from "./types";

import { ModalComponent, ModalWrapper } from "./styles";

function Modal({ children, closeModal }: ModalProps) {
  return (
    <ModalWrapper onClick={closeModal}>
      <ModalComponent>{children}</ModalComponent>
    </ModalWrapper>
  );
}

export default Modal;
