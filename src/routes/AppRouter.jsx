import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../modules/login/LoginPage";
import DashboardPage from "../modules/dashboard/DashboardPage";
import InventarioPage from "../modules/inventario/InventarioPage";
import ReportesPage from "../modules/reportes/ReportesPage";
import AdministracionPage from "../modules/administracion/AdministracionPage";
import AyudaPage from "../modules/ayuda/AyudaPage";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas protegidas */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/inventario"
        element={
          <ProtectedRoute>
            <InventarioPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reportes"
        element={
          <ProtectedRoute>
            <ReportesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/administracion"
        element={
          <ProtectedRoute>
            <AdministracionPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/ayuda"
        element={
          <ProtectedRoute>
            <AyudaPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  );
}

export default AppRouter;