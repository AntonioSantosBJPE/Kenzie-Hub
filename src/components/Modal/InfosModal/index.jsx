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

export function InfosModal() {
  const { actionCloseModal, editTech, deleteTechnology, loading } =
    useContext(TechContext);
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
          <Form>
            <Input label="title" labelName="Nome" type="text" disabled={true} />
            <Select label="status" labelName="Selecionar status">
              <option value="">Selecionar status</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </Select>
            <StyledBoxButtons>
              <Button
                type="submit"
                variant="primaryDefault"
                name="Salvar alterações"
              />
              <Button
                type="button"
                variant="grey1Default"
                name={loading ? "Excluindo..." : "Excluir"}
                disabled={loading}
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
