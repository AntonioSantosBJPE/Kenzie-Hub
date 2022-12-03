import { StyledLink } from "./style";

export function LinkNavigation({ to, name, variant }) {
  return (
    <StyledLink to={to} variant={variant}>
      {name}
    </StyledLink>
  );
}
