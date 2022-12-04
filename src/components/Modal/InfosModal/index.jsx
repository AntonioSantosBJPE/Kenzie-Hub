import {
  StyledModalWrap,
  StyledModal,
  StyledModalHeader,
  StyledBoxForm,
  StyledBoxButtons,
} from "../style";
import { Input } from "../../Input";
import { Select } from "../../Select";
import { FiX } from "react-icons/fi";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { Title } from "../../Title";
import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { useForm } from "react-hook-form";
import { InfosModalformSchema } from "./InfosModalFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";

export function InfosModal() {
  const {
    actionCloseModal,
    editTech,
    deleteTechnology,
    loading,
    loadingDeleteTech,
    onSubmitEditTech,
  } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InfosModalformSchema),
    defaultValues: { title: editTech.title, status: editTech.status },
  });

  return (
    <StyledModalWrap>
      <StyledModal>
        <StyledModalHeader>
          <Title type="title3BoldGrey0">Tecnologia Detalhes</Title>
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
          <Form action={handleSubmit(onSubmitEditTech)}>
            <Input
              label="title"
              labelName="Nome"
              type="text"
              disabled={true}
              linkForm={register("title")}
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
            <StyledBoxButtons>
              <Button
                type="submit"
                variant="primaryDefault"
                name={loading ? "Salvando..." : "Salvar alterações"}
                disabled={loading}
              />
              <Button
                type="button"
                variant="grey1Default"
                name={loadingDeleteTech ? "Excluindo..." : "Excluir"}
                disabled={loadingDeleteTech}
                action={() => {
                  deleteTechnology();
                }}
              />
            </StyledBoxButtons>
          </Form>
        </StyledBoxForm>
      </StyledModal>
    </StyledModalWrap>
  );
}
