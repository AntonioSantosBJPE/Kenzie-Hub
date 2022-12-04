import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/login/index";
import { RegisterPage } from "../pages/register/index";
import { DashboardPage } from "../pages/dashboard/index";

export function RoutesApp() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}
