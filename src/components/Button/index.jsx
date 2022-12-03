import { StyledButton } from "./style";

export function Button({ name, type, variant, disabled, action }) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      variant={variant}
      onClick={action}
    >
      {name}
    </StyledButton>
  );
}
