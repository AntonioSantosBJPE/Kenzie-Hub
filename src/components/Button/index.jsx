import { StyledButton } from "./style";

export function Button({ children, name, type, variant, disabled, action }) {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      variant={variant}
      onClick={action}
    >
      {name}
      {children}
    </StyledButton>
  );
}
