import { StyledContainerLogin, StyledBoxForm } from "./style";
import { StyledContainer } from "../../styles/global";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { LinkNavigation } from "../../components/LinkNavigation";
import { useForm } from "react-hook-form";
import { LoginformSchema } from "./loginFormSchema.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function LoginPage() {
  const { onSubmitLogin, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginformSchema),
  });

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
                name={loading ? "Entrando..." : "Entrar"}
                type="submit"
                disabled={loading}
                variant="primaryDefault"
              />
            </Form>
            <Title type="title3RegularGrey1">Ainda não possui uma conta?</Title>
            <LinkNavigation
              to="/register"
              variant="grey1Default"
              name="Cadastre-se"
            />
          </StyledBoxForm>
        </StyledContainerLogin>
      </StyledContainer>
    </>
  );
}
