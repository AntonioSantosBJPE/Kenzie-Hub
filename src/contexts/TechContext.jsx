import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const TechContext = createContext();

export function TechProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const token = JSON.parse(localStorage.getItem("@TOKEN"));

  function actionOpenModal(type) {
    setOpenModal(true);
    setTypeModal(type);
  }
  function actionCloseModal(type) {
    setOpenModal(false);
    setTypeModal("");
  }

  return (
    <TechContext.Provider
      value={{ openModal, typeModal, actionOpenModal, actionCloseModal }}
    >
      {children}
    </TechContext.Provider>
  );
}
