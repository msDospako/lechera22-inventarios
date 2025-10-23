export default function ReportesInventario({ datos }) {
    return (
        <section className="reportes-seccion">
            <h2 className="reportes-subtitulo">Estado del Inventario</h2>

            <table className="reportes-tabla">
                <thead>
                    <tr>
                        <th>Familia</th>
                        <th>Producto</th>
                        <th>Piezas Disponibles</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((d, i) => (
                        <tr key={i}>
                            <td>{d.familia}</td>
                            <td>{d.producto}</td>
                            <td>{d.piezas.toLocaleString()}</td>
                            <td>{d.estado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}