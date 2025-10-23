export default function ReportesTablaGeneral({ registros }) {
    return (
        <section className="reportes-seccion">
            <h2 className="reportes-subtitulo">Resumen Diario</h2>

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
                            <td>{r.pedidos}</td>
                            <td>{r.cumplimiento}%</td>
                            <td>${r.valorInventario.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}