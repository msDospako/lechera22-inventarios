export default function AdminRoles() {
    const roles = [
        {
            id: 1,
            nombre: "Administrador",
            descripcion: "Acceso total al sistema, configuración y mantenimiento.",
            permisos: ["Usuarios", "Parámetros", "Reportes", "Inventario", "Seguridad"],
        },
        {
            id: 2,
            nombre: "Dirección",
            descripcion: "Acceso a métricas, reportes y análisis globales.",
            permisos: ["Dashboard", "Reportes", "Inventario"],
        },
        {
            id: 3,
            nombre: "Supervisor",
            descripcion: "Monitoreo de operaciones y gestión de inventarios.",
            permisos: ["Inventario", "Reportes"],
        },
        {
            id: 4,
            nombre: "Operador",
            descripcion: "Captura y actualización de datos de producción.",
            permisos: ["Inventario"],
        },
    ];

    return (
        <section className="admin-seccion">
            <h2 className="admin-subtitulo">Gestión de Roles y Permisos</h2>

            <div className="admin-tabla">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Rol</th>
                            <th>Descripción</th>
                            <th>Permisos</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roles.map((r) => (
                            <tr key={r.id}>
                                <td>{r.id}</td>
                                <td>{r.nombre}</td>
                                <td>{r.descripcion}</td>
                                <td>
                                    {r.permisos.map((perm, i) => (
                                        <span key={i} className="admin-chip">
                                            {perm}
                                        </span>
                                    ))}
                                </td>
                                <td>
                                    <button className="admin-btn">Editar</button>{" "}
                                    <button className="admin-btn-sec">Asignar Permisos</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Botón de creación */}
            <div style={{ marginTop: "16px", textAlign: "right" }}>
                <button className="admin-btn">+ Crear nuevo rol</button>
            </div>
        </section>
    );
}