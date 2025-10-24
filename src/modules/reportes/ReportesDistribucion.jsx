import "./reportes.css";

export default function ReportesDistribucion({ datos = [] }) {
    if (!datos.length) {
        return (
            <section className="reportes-seccion">
                <h2 className="reportes-subtitulo">Distribución y Logística</h2>
                <p className="reportes-vacio">
                    No hay registros de distribución disponibles para este período.
                </p>
            </section>
        );
    }

    return (
        <section className="reportes-seccion">
            <h2 className="reportes-subtitulo">Distribución y Logística</h2>

            <div className="tabla-scroll">
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
                                <td>{d.pedidos.toLocaleString()}</td>
                                <td>{d.entregas.toLocaleString()}</td>
                                <td>{d.cumplimiento}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}