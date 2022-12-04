import { Header } from "../../components/Header";
import {
  StyledContainerDashboard,
  StyledContainerCentral,
  StyledSpanLine,
  StyledBoxInfosUser,
  StyledBoxInfosPage,
} from "./style";
import { Button } from "../../components/Button/index";
import { Title } from "../../components/Title/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ListTechnologies } from "../../components/ListTechnologies/index";
import { Modal } from "../../components/Modal";

export function DashboardPage() {
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    !localStorage.getItem("@TOKEN") && navigate("/");
  }, []);

  function handleLogout() {
    toast.success("Logout realizado com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setLoggedUser({});
    navigate("/login");
  }
  return (
    <>
      <Modal />
      <StyledContainerDashboard>
        <StyledContainerCentral>
          <Header alignJustify="space-between">
            <Button
              type="button"
              disabled={false}
              name="Sair"
              variant="grey3Default"
              action={handleLogout}
            />
          </Header>
        </StyledContainerCentral>
        <StyledSpanLine />
        {Object.keys(loggedUser).length > 0 ? (
          <>
            <StyledContainerCentral>
              <StyledBoxInfosUser>
                <Title type="title1BoldGrey0">Olá, {loggedUser.name}</Title>
                <Title type="title3RegularGrey1">
                  {loggedUser.course_module}
                </Title>
              </StyledBoxInfosUser>
            </StyledContainerCentral>
            <StyledSpanLine />
            <StyledContainerCentral>
              <ListTechnologies />
            </StyledContainerCentral>
          </>
        ) : (
          <StyledContainerCentral>
            <Title type="title1BoldGrey0">Carregando...</Title>
          </StyledContainerCentral>
        )}
      </StyledContainerDashboard>
    </>
  );
}
