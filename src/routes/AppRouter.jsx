import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../modules/login/LoginPage";
import DashboardPage from "../modules/dashboard/DashboardPage";
import InventarioPage from "../modules/inventario/InventarioPage";
import ReportesPage from "../modules/reportes/ReportesPage";
import AdministracionPage from "../modules/administracion/AdministracionPage";
import AyudaPage from "../modules/ayuda/AyudaPage";

function AppRouter() {
    return (
    <Router>
        <Routes>
        /* Ruta por defecto */
            <Route path="/" element={<Navigate to="/login" replace />} />

        /* Módulos principales */
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/inventario" element={<InventarioPage />} />
            <Route path="/reportes" element={<ReportesPage />} />
            <Route path="/administracion" element={<AdministracionPage />} />
            <Route path="/ayuda" element={<AyudaPage />} />

            /* Ruta de fallback */
            <Route path="*" element={<h1 className="text-center text-red-600 mt-10">404 - Página no encontrada</h1>} />
            </Routes>
    </Router>
    );
}

export default AppRouter;