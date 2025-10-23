export default function ReportesResumenGlobal({ resumen }) {
    return (
        <section className="reportes-kpis">
            <div className="kpi-card">
                <h4>Producción Total</h4>
                <p className="kpi-valor">{resumen.produccionTotal.toLocaleString()} u.</p>
            </div>

            <div className="kpi-card">
                <h4>Eficiencia Promedio</h4>
                <p className="kpi-valor">{resumen.eficienciaPromedio}%</p>
            </div>

            <div className="kpi-card">
                <h4>Pedidos Totales</h4>
                <p className="kpi-valor">{resumen.pedidosTotales.toLocaleString()}</p>
            </div>

            <div className="kpi-card">
                <h4>Cumplimiento Entregas</h4>
                <p className="kpi-valor">{resumen.cumplimientoEntregas}%</p>
            </div>

            <div className="kpi-card">
                <h4>Valor del Inventario</h4>
                <p className="kpi-valor">${resumen.valorInventario.toLocaleString()}</p>
            </div>
        </section>
    );
}