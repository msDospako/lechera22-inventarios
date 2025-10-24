import "./reportes.css";

export default function ReportesInventario({ datos = [] }) {
    if (!datos.length) {
        return (
            <section className="reportes-seccion">
                <h2 className="reportes-subtitulo">Estado del Inventario</h2>
                <p className="reportes-vacio">
                    No hay datos de inventario disponibles para este período.
                </p>
            </section>
        );
    }

    return (
        <section className="reportes-seccion">
            <h2 className="reportes-subtitulo">Estado del Inventario</h2>

            <div className="tabla-scroll">
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
                                <td>
                                    {d.estado === "OK" && "🟢 Correcto"}
                                    {d.estado === "Próximo a caducar" && "🟡 Próximo a caducar"}
                                    {d.estado === "Bajo stock" && "🟠 Bajo stock"}
                                    {d.estado === "Caducado" && "🔴 Caducado"}
                                    {!["OK", "Próximo a caducar", "Bajo stock", "Caducado"].includes(d.estado) &&
                                        d.estado}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}