import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import { StyledListTechnology, StyledBoxRegisterTech } from "./style";
import { CardTech } from "./CardTechnology";
import { Title } from "../Title";
import { Button } from "../Button";
import { FiPlus } from "react-icons/fi";

export function ListTechnologies() {
  const { loggedUser } = useContext(UserContext);
  const { actionOpenModal } = useContext(TechContext);

  return (
    <>
      <StyledBoxRegisterTech>
        <Title type="title1BoldGrey0">Tecnologias</Title>
        <Button
          type="button"
          disabled={false}
          variant="grey3Default"
          action={() => {
            actionOpenModal("addModal");
          }}
        >
          <FiPlus size="1.5rem" />
        </Button>
      </StyledBoxRegisterTech>
      {loggedUser.techs.length > 0 ? (
        <StyledListTechnology>
          {loggedUser.techs.map((tech) => {
            return <CardTech key={tech.id} tech={tech}></CardTech>;
          })}
        </StyledListTechnology>
      ) : (
        <StyledBoxRegisterTech>
          <Title type="title1BoldGrey0">
            Não existem tecnologias cadastradas!
          </Title>
        </StyledBoxRegisterTech>
      )}
    </>
  );
}
