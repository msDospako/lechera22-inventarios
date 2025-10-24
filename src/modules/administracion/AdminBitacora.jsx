export default function AdminBitacora() {
    const bitacora = [
        {
            id: 1,
            usuario: "María López",
            accion: "Inicio de sesión",
            modulo: "Inventario",
            fecha: "24/10/2025 08:15",
            detalle: "Acceso correcto al sistema",
        },
        {
            id: 2,
            usuario: "Juan Pérez",
            accion: "Modificó parámetro",
            modulo: "Parámetros del Sistema",
            fecha: "24/10/2025 09:32",
            detalle: "Cambió valor de tolerancia de caducidad de 10 a 15 días",
        },
        {
            id: 3,
            usuario: "Ana Torres",
            accion: "Generó reporte",
            modulo: "Reportes",
            fecha: "23/10/2025 14:05",
            detalle: "Reporte mensual de cumplimiento de pedidos",
        },
        {
            id: 4,
            usuario: "Carlos Ruiz",
            accion: "Editó usuario",
            modulo: "Usuarios",
            fecha: "23/10/2025 17:40",
            detalle: "Desactivó al usuario 'Operador 3'",
        },
    ];

    return (
        <section className="admin-seccion">
            <h2 className="admin-subtitulo">Bitácora de Actividades</h2>

            <div className="admin-tabla">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>Acción</th>
                            <th>Módulo</th>
                            <th>Fecha y Hora</th>
                            <th>Detalle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bitacora.map((b) => (
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                <td>{b.usuario}</td>
                                <td>{b.accion}</td>
                                <td>{b.modulo}</td>
                                <td>{b.fecha}</td>
                                <td>{b.detalle}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ marginTop: "16px", textAlign: "right" }}>
                <button className="admin-btn-sec">Exportar a Excel</button>
                <button className="admin-btn">Limpiar Bitácora</button>
            </div>
        </section>
    );
}