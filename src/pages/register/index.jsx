import { StyledContainerRegister, StyledBoxForm } from "./style";
import { StyledContainer } from "../../styles/global";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { LinkNavigation } from "../../components/LinkNavigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterformSchema } from "./registerFormSchema.js";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function RegisterPage() {
  const { onSubmitRegister, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterformSchema),
  });

  return (
    <>
      <StyledContainer>
        <StyledContainerRegister>
          <Header alignJustify="space-between">
            <LinkNavigation to="/login" variant="grey3Medium" name="Voltar" />
          </Header>
          <StyledBoxForm>
            <Title type="title1BoldGrey0">Crie sua conta</Title>
            <Title type="title3RegularGrey1">
              Rápido e grátis, vamos nessa
            </Title>

            <Form action={handleSubmit(onSubmitRegister)}>
              <Input
                label="inputName"
                labelName="Nome"
                type="text"
                placeholder="Digite aqui seu nome"
                linkForm={register("name")}
                error={errors.name?.message}
              />

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

              <Input
                label="inputPasswordConfirmation"
                labelName="Confirmar senha"
                type="password"
                placeholder="Digite aqui sua senha novamente"
                linkForm={register("passwordConfirmation")}
                error={errors.passwordConfirmation?.message}
              />

              <Input
                label="inputBio"
                labelName="Bio"
                type="text"
                placeholder="Fale sobre você"
                linkForm={register("bio")}
                error={errors.bio?.message}
              />

              <Input
                label="inputContact"
                labelName="Contato"
                type="text"
                placeholder="Fale sobre você"
                linkForm={register("contact")}
                error={errors.contact?.message}
              />

              <Select
                labelName="Selecionar módulo"
                label="course_module"
                linkForm={register("course_module")}
                error={errors.course_module?.message}
              >
                <option value="">Módulos</option>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro Módulo
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo Módulo
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro Módulo
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto Módulo
                </option>
              </Select>

              <Button
                name={loading ? "Cadastrando..." : "Cadastrar"}
                type="submit"
                disabled={loading}
                variant="primaryDefault"
              />
            </Form>
          </StyledBoxForm>
        </StyledContainerRegister>
      </StyledContainer>
    </>
  );
}
