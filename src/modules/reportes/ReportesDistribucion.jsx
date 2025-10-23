export default function ReportesDistribucion({ datos }) {
    return (
        <section className="reportes-seccion">
            <h2 className="reportes-subtitulo">Distribución y Logística</h2>

            <table className="reportes-tabla">
                <thead>
                    <tr>
                        <th>Zona</th>
                        <th>Pedidos</th>
                        <th>Entregas</th>
                        <th>Cumplimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((d, i) => (
                        <tr key={i}>
                            <td>{d.zona}</td>
                            <td>{d.pedidos}</td>
                            <td>{d.entregas}</td>
                            <td>{d.cumplimiento}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}