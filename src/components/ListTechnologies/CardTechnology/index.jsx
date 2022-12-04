import { StyledCardTech } from "./style";
import { Title } from "../../Title";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { UserContext } from "../../../contexts/UserContext";

export function CardTech({ tech }) {
  const { actionOpenModal, setEditTech } = useContext(TechContext);
  return (
    <StyledCardTech
      onClick={() => {
        actionOpenModal("infosModal");
        setEditTech(tech);
      }}
    >
      <Title type="title3BoldGrey0">{tech.title}</Title>
      <Title type="title3RegularGrey1">{tech.status}</Title>
    </StyledCardTech>
  );
}
