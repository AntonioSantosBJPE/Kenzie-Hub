import { StyledHeader } from "./style";
import logo from "../../assets/Logo.svg";

export function Header({ children, alignJustify }) {
  return (
    <StyledHeader alignJustify={alignJustify}>
      <img src={logo} alt="logo kenzie hub" />
      {children}
    </StyledHeader>
  );
}
