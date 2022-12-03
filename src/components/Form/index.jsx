import { StyledForm } from "./style";

export function Form({ children, action }) {
  return <StyledForm onSubmit={action}>{children}</StyledForm>;
}
