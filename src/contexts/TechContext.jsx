import { createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";
import { useContext } from "react";

export const TechContext = createContext();

export function TechProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [editTech, setEditTech] = useState("");
  const [loading, setLoading] = useState(false);

  const { requestUserProfile, loggedUser } = useContext(UserContext);

  const token = JSON.parse(localStorage.getItem("@TOKEN"));

  function actionOpenModal(type) {
    setOpenModal(true);
    setTypeModal(type);
  }
  function actionCloseModal(type) {
    setOpenModal(false);
    setTypeModal("");
    setEditTech("");
  }

  async function onSubmitRegisterTech(data) {
    try {
      const response = await api.post("users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(true);
      toast.success("Tecnologia cadastrada!");
      requestUserProfile();
      actionCloseModal();
    } catch (error) {
      console.error(error.response);
      toast.error(
        "Ops! Não é permitido criar duas tecnologias com o mesmo nome"
      );
    } finally {
      setLoading(false);
    }
  }

  async function onSubmitEditTech(data) {
    const url = `users/techs/${editTech.id}`;
    try {
      const response = await api.put(url, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(true);
      toast.success("Tecnologia editada!");
      requestUserProfile();
      actionCloseModal();
    } catch (error) {
      console.error(error.response);
      toast.error("Ops! Algo deu errado!");
    } finally {
      setLoading(false);
    }
  }

  async function deleteTechnology() {
    const url = `users/techs/${editTech.id}`;

    try {
      const response = await api.delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(true);
      toast.success("Tecnologia apagada!");
      requestUserProfile();
      actionCloseModal();
    } catch (error) {
      console.error(error.response);
      toast.error("Ops! Algo deu errado!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <TechContext.Provider
      value={{
        openModal,
        typeModal,
        actionOpenModal,
        actionCloseModal,
        onSubmitRegisterTech,
        editTech,
        setEditTech,
        deleteTechnology,
        loading,
        onSubmitEditTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
