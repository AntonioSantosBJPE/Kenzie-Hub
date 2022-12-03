import { StyledCardTech } from "./style";
import { Title } from "../../Title";

export function CardTech({ tech }) {
  return (
    <StyledCardTech>
      <Title type="title3BoldGrey0">{tech.title}</Title>
      <Title type="title3RegularGrey1">{tech.status}</Title>
    </StyledCardTech>
  );
}
