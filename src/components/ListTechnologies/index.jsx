import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledListTechnology, StyledBoxRegisterTech } from "./style";
import { CardTech } from "./CardTechnology";
import { Title } from "../Title";
import { Button } from "../Button";
import { FiPlus } from "react-icons/fi";

export function ListTechnologies() {
  const { loggedUser } = useContext(UserContext);

  return (
    <>
      <StyledBoxRegisterTech>
        <Title type="title1BoldGrey0">Tecnologias</Title>
        <Button type="button" disabled={false} variant="grey3Default">
          <FiPlus size="1.5rem" />
        </Button>
      </StyledBoxRegisterTech>
      <StyledListTechnology>
        {loggedUser.techs.map((tech) => {
          return <CardTech key={tech.id} tech={tech}></CardTech>;
        })}
      </StyledListTechnology>
    </>
  );
}
