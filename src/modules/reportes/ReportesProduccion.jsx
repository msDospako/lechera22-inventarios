export default function ReportesProduccion({ datos }) {
    return (
        <section className="reportes-seccion">
            <h2 className="reportes-subtitulo">Producción Mensual</h2>

            <table className="reportes-tabla">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Producto</th>
                        <th>Unidades</th>
                        <th>Eficiencia</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((d, i) => (
                        <tr key={i}>
                            <td>{d.fecha}</td>
                            <td>{d.producto}</td>
                            <td>{d.unidades.toLocaleString()}</td>
                            <td>{d.eficiencia}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}