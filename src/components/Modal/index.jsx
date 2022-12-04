import { Button } from "../Button";
import { Form } from "../Form";
import { Title } from "../Title";
import { FiX } from "react-icons/fi";
import {
  StyledModalWrap,
  StyledModal,
  StyledModalHeader,
  StyledBoxForm,
} from "./style";
import { Input } from "../Input";
import { Select } from "../Select";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

export function Modal() {
  const { openModal, typeModal, actionCloseModal } = useContext(TechContext);

  return (
    <>
      {openModal &&
        (typeModal === "addModal" ? (
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
                <Form>
                  <Input
                    label="title"
                    labelName="Nome"
                    type="text"
                    placeholder="Digite o nome da tecnologia"
                  />
                  <Select label="status" labelName="Selecionar status">
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
        ) : (
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
              <StyledBoxForm></StyledBoxForm>
            </StyledModal>
          </StyledModalWrap>
        ))}
    </>
  );
}
