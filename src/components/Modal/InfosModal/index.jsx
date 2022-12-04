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

export function InfosModal() {
  const { actionCloseModal } = useContext(TechContext);
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
        <StyledBoxForm></StyledBoxForm>
      </StyledModal>
    </StyledModalWrap>
  );
}
