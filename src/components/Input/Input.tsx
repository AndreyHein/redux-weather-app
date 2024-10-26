import { InputProps } from "./types";
import {
  InputWrapper,
  InputComponent,
  ErrorContainer,
} from "./styles";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  error = undefined,
  value,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        $error={error}
        value={value}
        onChange={onChange}
      />
      <ErrorContainer>{error}</ErrorContainer>
    </InputWrapper>
  );
}

export default Input;