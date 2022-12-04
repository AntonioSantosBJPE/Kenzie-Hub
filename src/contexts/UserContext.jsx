import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("@TOKEN"));

  async function requestUserProfile() {
    try {
      const response = await api.get("profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoggedUser(response.data);
    } catch (error) {
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
      console.error(error.response.data);
    }
  }

  async function onSubmitLogin(data) {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      toast.success("Login realizado com sucesso!");
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
      setLoggedUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado, faça o login novamente");
    } finally {
      setLoading(false);
    }
  }

  async function onSubmitRegister(data) {
    delete data.passwordConfirmation;
    try {
      setLoading(true);
      const response = await api.post("users", data);
      toast.success("Conta criada com sucesso!", {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/login");
    } catch (error) {
      console.error(error.response.data.message);
      toast.error("Ops! Algo deu errado, faça o cadastro novamente", {
        position: toast.POSITION.TOP_CENTER,
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    token && requestUserProfile();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        setLoggedUser,
        requestUserProfile,
        onSubmitLogin,
        onSubmitRegister,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
