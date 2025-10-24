import "./reportes.css";

export default function ReportesResumenGlobal({ resumen = {} }) {
    // Fallbacks para evitar errores si falta información
    const {
        produccionTotal = 0,
        eficienciaPromedio = 0,
        pedidosTotales = 0,
        cumplimientoEntregas = 0,
        valorInventario = 0,
    } = resumen;

    return (
        <section className="reportes-seccion">
            <h2 className="reportes-subtitulo">Resumen Global</h2>

            <div className="reportes-kpis">
                <div className="kpi-card">
                    <h4>Producción Total</h4>
                    <p className="kpi-valor">{produccionTotal.toLocaleString()} u.</p>
                </div>

                <div className="kpi-card">
                    <h4>Eficiencia Promedio</h4>
                    <p className="kpi-valor">{eficienciaPromedio}%</p>
                </div>

                <div className="kpi-card">
                    <h4>Pedidos Totales</h4>
                    <p className="kpi-valor">{pedidosTotales.toLocaleString()}</p>
                </div>

                <div className="kpi-card">
                    <h4>Cumplimiento de Entregas</h4>
                    <p className="kpi-valor">{cumplimientoEntregas}%</p>
                </div>

                <div className="kpi-card">
                    <h4>Valor del Inventario</h4>
                    <p className="kpi-valor">${valorInventario.toLocaleString()}</p>
                </div>
            </div>
        </section>
    );
}