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
  const [loadingDeleteTech, setLoadingDeleteTech] = useState(false);

  const { requestUserProfile } = useContext(UserContext);

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
      setTimeout(() => {
        toast.success("Tecnologia cadastrada!");
        requestUserProfile();
        actionCloseModal();
      }, 500);
    } catch (error) {
      console.error(error.response);
      toast.error(
        "Ops! Não é permitido criar duas tecnologias com o mesmo nome"
      );
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }

  async function onSubmitEditTech(data) {
    const url = `users/techs/${editTech.id}`;
    try {
      const response = await api.put(url, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoading(true);
      setTimeout(() => {
        toast.success("Tecnologia editada!");
        requestUserProfile();
        actionCloseModal();
      }, 500);
    } catch (error) {
      console.error(error.response);
      toast.error("Ops! Algo deu errado!");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }

  async function deleteTechnology() {
    const url = `users/techs/${editTech.id}`;

    try {
      const response = await api.delete(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoadingDeleteTech(true);
      setTimeout(() => {
        toast.success("Tecnologia apagada!");
        requestUserProfile();
        actionCloseModal();
      }, 500);
    } catch (error) {
      console.error(error.response);
      toast.error("Ops! Algo deu errado!");
    } finally {
      setTimeout(() => {
        setLoadingDeleteTech(false);
      }, 500);
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
        loadingDeleteTech,
        onSubmitEditTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
}
