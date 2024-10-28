import { ButtonProps } from "./types"
import { ButtonComponent } from "./styles"

function Button({
  type = "button",
  name,
  onClick,
  isCardButton = false,
  disabled,
}: ButtonProps) {
  return (
    <ButtonComponent $isCardButton={isCardButton} disabled={disabled} onClick={onClick} type={type} >
      {name}
    </ButtonComponent>
  )
}

export default Button