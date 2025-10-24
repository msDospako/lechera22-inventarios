import "./reportes.css";

export default function ReportesTablaGeneral({ registros = [] }) {
    if (!registros.length) {
        return (
            <section className="reportes-seccion">
                <h2 className="reportes-subtitulo">Resumen Diario</h2>
                <p className="reportes-vacio">
                    No hay registros disponibles para el período seleccionado.
                </p>
            </section>
        );
    }

    return (
        <section className="reportes-seccion">
            <h2 className="reportes-subtitulo">Resumen Diario</h2>

            <div className="tabla-scroll">
                <table className="reportes-tabla">
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Producción</th>
                            <th>Eficiencia</th>
                            <th>Pedidos</th>
                            <th>Cumplimiento</th>
                            <th>Valor Inventario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registros.map((r, idx) => (
                            <tr key={idx}>
                                <td>{r.fecha}</td>
                                <td>{r.produccion.toLocaleString()}</td>
                                <td>{r.eficiencia}%</td>
                                <td>{r.pedidos.toLocaleString()}</td>
                                <td>{r.cumplimiento}%</td>
                                <td>${r.valorInventario.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}