import {
  StyledH2BoldGrey0,
  StyledH3RegularGrey0,
  StyledH4RegularGrey0,
  StyledH4RegularGrey1,
  StyledH3BoldGrey0,
} from "./style";
export function Title({ children, type }) {
  return (
    <>
      {type === "title1BoldGrey0" && (
        <StyledH2BoldGrey0>{children}</StyledH2BoldGrey0>
      )}
      {type === "title2RegularGrey0" && (
        <StyledH3RegularGrey0>{children}</StyledH3RegularGrey0>
      )}
      {type === "title3RegularGrey0" && (
        <StyledH4RegularGrey0>{children}</StyledH4RegularGrey0>
      )}
      {type === "title3BoldGrey0" && (
        <StyledH3BoldGrey0>{children}</StyledH3BoldGrey0>
      )}
      {type === "title3RegularGrey1" && (
        <StyledH4RegularGrey1>{children}</StyledH4RegularGrey1>
      )}
    </>
  );
}
