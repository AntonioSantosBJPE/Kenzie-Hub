import { StyledContainerSelect } from "./style";

export function Select({ children, labelName, label, linkForm, error }) {
  return (
    <StyledContainerSelect>
      <label htmlFor={label}>{labelName}</label>
      <select id={label} {...linkForm}>
        {children}
      </select>
      <p>{error}</p>
    </StyledContainerSelect>
  );
}
