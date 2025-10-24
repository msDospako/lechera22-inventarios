import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import Sidebar from "../../components/Sidebar";
import AdminUsuarios from "./AdminUsuarios";
import AdminProductos from "./AdminProductos";
import AdminParametros from "./AdminParametros";
import AdminSeguridad from "./AdminSeguridad";
import AdminLogs from "./AdminLogs";
import AdminRoles from "./AdminRoles";
import AdminBitacora from "./AdminBitacora";
import "./administracion.css";

export default function AdministracionPage() {
    const { user } = useAuth();

    // 🔒 Restricción de acceso — solo admin y dirección
    if (user?.role !== "admin" && user?.role !== "direccion") {
        return <Navigate to="/dashboard" replace />;
    }

    return (
        <div className="flex min-h-screen bg-gray-950 text-white">
            {/* === Sidebar global === */}
            <Sidebar />

            {/* === Contenido principal === */}
            <div className="flex-1 p-6 ml-[240px] transition-all duration-300 administracion-container">
                <header className="admin-header mb-6">
                    <h1 className="admin-title">Panel de Administración</h1>
                    <p className="admin-subtitle">
                        Configuración general del sistema, usuarios y parámetros operativos.
                    </p>
                    <span className="admin-fecha">Actualizado: 24 Oct 2025</span>
                </header>

                {/* === Secciones principales === */}
                <AdminUsuarios />
                <AdminProductos />
                <AdminParametros />
                <AdminLogs />
                <AdminRoles />
                <AdminBitacora />
                <AdminSeguridad />
            </div>
        </div>
    );
}