import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { AddModal } from "./AddModal";
import { InfosModal } from "./InfosModal";

export function Modal() {
  const { openModal, typeModal } = useContext(TechContext);

  return (
    <>
      {openModal && (typeModal === "addModal" ? <AddModal /> : <InfosModal />)}
    </>
  );
}
