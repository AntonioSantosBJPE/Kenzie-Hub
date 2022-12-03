import { StyledContainerLogin, StyledBoxForm } from "./style";
import { StyledContainer } from "../../styles/global";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { LinkNavigation } from "../../components/LinkNavigation";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { LoginformSchema } from "./loginFormSchema.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export function LoginPage() {
  const { setLoggedUser } = useContext(UserContext);
  const [loginLoading, setLoginLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginformSchema),
  });

  const navigate = useNavigate();

  async function onSubmitLogin(data) {
    try {
      setLoginLoading(true);
      const response = await api.post("/sessions", data);
      toast.success("Login realizado com sucesso!");
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      setLoggedUser(response.data.user);
      navigate("dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado, faça o login novamente");
    } finally {
      setLoginLoading(false);
    }
  }
  return (
    <>
      <StyledContainer>
        <StyledContainerLogin>
          <Header alignJustify="center" />
          <StyledBoxForm>
            <Title type="title1BoldGrey0">Login</Title>
            <Form action={handleSubmit(onSubmitLogin)}>
              <Input
                label="inputEmail"
                labelName="Email"
                type="text"
                placeholder="Digite aqui seu email"
                linkForm={register("email")}
                error={errors.email?.message}
              />
              <Input
                label="inputPassword"
                labelName="Senha"
                type="password"
                placeholder="Digite aqui sua senha"
                linkForm={register("password")}
                error={errors.password?.message}
              />
              <Button
                name={loginLoading ? "Entrando..." : "Entrar"}
                type="submit"
                disabled={loginLoading}
                variant="primaryDefault"
              />
            </Form>
            <Title type="title3RegularGrey1">Ainda não possui uma conta?</Title>
            <LinkNavigation
              to="register"
              variant="grey1Default"
              name="Cadastre-se"
            />
          </StyledBoxForm>
        </StyledContainerLogin>
      </StyledContainer>
    </>
  );
}
