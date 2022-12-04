import {
  StyledModalWrap,
  StyledModal,
  StyledModalHeader,
  StyledBoxForm,
} from "../style";
import { Input } from "../../Input";
import { Select } from "../../Select";
import { FiX } from "react-icons/fi";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { Title } from "../../Title";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { UserContext } from "../../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { AddModalformSchema } from "./AddModalFormSchema.js";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

export function AddModal() {
  const { actionCloseModal } = useContext(TechContext);
  const { requestUserProfile } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddModalformSchema),
  });

  async function onSubmitRegisterTech(data) {
    const token = JSON.parse(localStorage.getItem("@TOKEN"));

    try {
      const response = await api.post("users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Tecnologia cadastrada!");
      requestUserProfile();
      actionCloseModal();
    } catch (error) {
      console.error(error.response);
      toast.error(
        "Ops! Não é permitido criar duas tecnologias com o mesmo nome"
      );
    } finally {
    }
  }

  return (
    <StyledModalWrap>
      <StyledModal>
        <StyledModalHeader>
          <Title type="title3BoldGrey0">Cadastrar Tecnologias</Title>
          <Button
            type="button"
            variant="borderNone"
            action={() => {
              actionCloseModal();
            }}
          >
            <FiX />
          </Button>
        </StyledModalHeader>
        <StyledBoxForm>
          <Form action={handleSubmit(onSubmitRegisterTech)}>
            <Input
              label="title"
              labelName="Nome"
              type="text"
              placeholder="Digite o nome da tecnologia"
              linkForm={register("title")}
              error={errors.title?.message}
            />
            <Select
              label="status"
              labelName="Selecionar status"
              linkForm={register("status")}
              error={errors.status?.message}
            >
              <option value="">Selecionar status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            <Button
              type="submit"
              variant="primaryDefault"
              name="Cadastrar Tecnologia"
            />
          </Form>
        </StyledBoxForm>
      </StyledModal>
    </StyledModalWrap>
  );
}
