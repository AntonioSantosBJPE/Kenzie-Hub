import { StyledContainerInput } from "./style";

export function Input({
  labelName,
  label,
  type,
  disabled,
  placeholder,
  linkForm,
  error,
}) {
  return (
    <StyledContainerInput>
      <label htmlFor={label}>{labelName}</label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        {...linkForm}
        disabled={disabled}
      />
      <p>{error}</p>
    </StyledContainerInput>
  );
}
