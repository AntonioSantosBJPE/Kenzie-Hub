import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/login/index";
import { RegisterPage } from "../pages/register/index";
import { DashboardPage } from "../pages/dashboard/index";

export function RoutesApp({ setLoggedUser, loggedUser }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage setLoggedUser={setLoggedUser} />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="dashboard"
          element={
            <DashboardPage
              setLoggedUser={setLoggedUser}
              loggedUser={loggedUser}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
