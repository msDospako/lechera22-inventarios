import { useState } from "react";
import ReportesFiltros from "./ReportesFiltros";
import ReportesKPIs from "./ReportesKPIs";
import ReportesGrafica from "./ReportesGrafica";
import ReportesTabla from "./ReportesTabla";
import Sidebar from "../../components/Sidebar";
import "./reportes.css";

export default function ReportesPage() {
    const [sidebarColapsada, setSidebarColapsada] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-950 text-white">
            {/* === Sidebar con control dinámico === */}
            <Sidebar onToggle={setSidebarColapsada} />

            {/* === Contenido principal que se ajusta === */}
            <div
                className={`flex-1 p-6 transition-all duration-300 ${
                    sidebarColapsada ? "ml-[80px]" : "ml-[240px]"
                }`}
            >
                <div className="reportes-container">
                    <h1 className="reportes-title">Panel de Reportes</h1>
                    <p className="reportes-subtitle">
                        Visualización y análisis de desempeño de planta e inventarios.
                    </p>

                    <ReportesFiltros />
                    <ReportesKPIs />
                    <ReportesGrafica />
                    <ReportesTabla />
                </div>
            </div>
        </div>
    );
}