import Sidebar from "../../components/Sidebar";
import reportesDataMock from "../../data/reportesDataMock.js";

// === Secciones ===
import ReportesFiltros from "./ReportesFiltros";
import ReportesResumenGlobal from "./ReportesResumenGlobal";
import ReportesProduccion from "./ReportesProduccion";
import ReportesDistribucion from "./ReportesDistribucion";
import ReportesInventario from "./ReportesInventario";
import ReportesTablaGeneral from "./ReportesTablaGeneral";
import ReportesGraficas from "./ReportesGraficas";   

import "../../theme.css"
import "./reportes.css";

export default function ReportesPage() {
    const data = reportesDataMock;

    return (
        <div className="flex min-h-screen bg-gray-950 text-white">
            {/* === Sidebar global === */}
            <Sidebar />

            {/* === Contenido principal === */}
            <div className="flex-1 p-6 ml-[240px] transition-all duration-300">
                {/* === Encabezado === */}
                <header className="reportes-header mb-6">
                    <h1 className="reportes-title">
                        Panel de Reportes — {data.mes}
                    </h1>
                    <p className="reportes-subtitle">
                        Visualización y análisis de desempeño general de la planta e inventarios.
                    </p>
                    <span className="reportes-fecha">
                        Actualizado: 22 Oct 2025
                    </span>
                </header>

                {/* === Filtros visuales === */}
                <ReportesFiltros />

                {/* === Secciones de información === */}
                <ReportesResumenGlobal resumen={data.resumenGlobal} />
                <ReportesProduccion datos={data.produccion} />
                <ReportesDistribucion datos={data.distribucion} />
                <ReportesInventario datos={data.inventario} />
                <ReportesTablaGeneral registros={data.tablaGeneral} />
                <ReportesGraficas registros={data.tablaGeneral} /> 
            </div>
        </div>
    );
}