import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledListTechnology } from "./style";
import { CardTech } from "./CardTechnology";

export function ListTechnologies() {
  const { loggedUser } = useContext(UserContext);

  return (
    <StyledListTechnology>
      {loggedUser.techs.map((tech) => {
        return <CardTech key={tech.id} tech={tech}></CardTech>;
      })}
    </StyledListTechnology>
  );
}
