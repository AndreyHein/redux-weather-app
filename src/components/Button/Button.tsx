import { ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

function Button({
  type = "button",
  name,
  onClick,
  isCardButton = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      $isCardButton={isCardButton}
      onClick={onClick}
      type={type}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;