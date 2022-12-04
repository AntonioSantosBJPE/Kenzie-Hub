import { StyledCardTech } from "./style";
import { Title } from "../../Title";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";

export function CardTech({ tech }) {
  const { actionOpenModal } = useContext(TechContext);
  return (
    <StyledCardTech
      onClick={() => {
        actionOpenModal("infosModal");
      }}
    >
      <Title type="title3BoldGrey0">{tech.title}</Title>
      <Title type="title3RegularGrey1">{tech.status}</Title>
    </StyledCardTech>
  );
}
