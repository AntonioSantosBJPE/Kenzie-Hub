import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const UserContext = createContext();

export function UserProvider({ children }) {
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

  useEffect(() => {
    token && requestUserProfile();
  }, []);

  const [loggedUser, setLoggedUser] = useState({});

  return (
    <UserContext.Provider
      value={{ loggedUser, setLoggedUser, requestUserProfile }}
    >
      {children}
    </UserContext.Provider>
  );
}
