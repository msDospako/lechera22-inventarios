import { reportesConfig } from "../../data/reportesConfig";

export default function ReportesKPIs() {
    return (
        <div className="reportes-kpis">
        {reportesConfig.map((kpi) => (
            <div key={kpi.id} className="kpi-card">
            <h3>{kpi.nombre}</h3>
            <p className="kpi-valor">
                {kpi.valor}
                <span className="kpi-unidad">{kpi.unidad}</span>
            </p>
            <p className="kpi-descripcion">{kpi.descripcion}</p>
            </div>
        ))}
        </div>
    );
}