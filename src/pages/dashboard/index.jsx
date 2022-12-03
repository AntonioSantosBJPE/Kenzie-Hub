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
import { api } from "../../services/api";

export function DashboardPage({ loggedUser, setLoggedUser }) {
  const navigate = useNavigate();
  useEffect(() => {
    !localStorage.getItem("@TOKEN") && navigate("/");

    // const token = JSON.parse(localStorage.getItem("@TOKEN"));
    // async function testeAugusto() {
    //   try {
    //     const response = await api.get("profile", {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error.response.data);
    //   }
    // }
    // testeAugusto();
  }, []);

  function handleLogout() {
    toast.success("Logout realizado com sucesso!", {
      position: toast.POSITION.TOP_CENTER,
    });
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setLoggedUser({});
    navigate("/");
  }
  return (
    <>
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
        <StyledContainerCentral>
          <StyledBoxInfosUser>
            <Title type="title1BoldGrey0">Olá, {loggedUser.name}</Title>
            <Title type="title3RegularGrey1">{loggedUser.course_module}</Title>
          </StyledBoxInfosUser>
        </StyledContainerCentral>
        <StyledSpanLine />
        <StyledContainerCentral>
          <StyledBoxInfosPage>
            <Title type="title1BoldGrey0">
              Que pena! Estamos em desenvolvimento :(
            </Title>
            <Title type="title2RegularGrey0">
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </Title>
          </StyledBoxInfosPage>
        </StyledContainerCentral>
      </StyledContainerDashboard>
    </>
  );
}
