import { useState } from "react";

export default function AdminSeguridad() {
    const [showModal, setShowModal] = useState(false);

    const accesos = [
        { id: 1, rol: "Operador", accesos: "Inventario", estado: "Activo" },
        { id: 2, rol: "Supervisor", accesos: "Inventario, Reportes", estado: "Activo" },
        { id: 3, rol: "Dirección", accesos: "Reportes, Administración (lectura)", estado: "Activo" },
        { id: 4, rol: "Administrador", accesos: "Todos los módulos", estado: "Activo" },
    ];

    return (
        <section className="admin-seccion">
            <h2 className="admin-subtitulo">Seguridad y Accesos</h2>

            {/* Botón principal */}
            <div className="admin-acciones">
                <button className="admin-btn" onClick={() => setShowModal(true)}>
                    + Asignar nuevo rol
                </button>
            </div>

            {/* Tabla de roles */}
            <div className="admin-tabla">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Rol</th>
                            <th>Accesos Permitidos</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accesos.map((a) => (
                            <tr key={a.id}>
                                <td>{a.id}</td>
                                <td>{a.rol}</td>
                                <td>{a.accesos}</td>
                                <td>{a.estado}</td>
                                <td>
                                    <button className="admin-btn edit">Editar</button>
                                    <button className="admin-btn-sec">Desactivar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal visual */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Asignar nuevo rol o permiso</h3>

                        <form className="admin-form">
                            <input type="text" placeholder="Nombre del rol" />
                            <select>
                                <option value="">Seleccionar nivel de acceso</option>
                                <option value="operador">Operador</option>
                                <option value="supervisor">Supervisor</option>
                                <option value="direccion">Dirección</option>
                                <option value="admin">Administrador</option>
                            </select>

                            <textarea
                                placeholder="Módulos o secciones que puede acceder"
                                rows="3"
                                className="textarea-parametro"
                            ></textarea>

                            <select>
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                            </select>

                            <div className="modal-actions">
                                <button
                                    type="button"
                                    className="admin-btn-sec"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancelar
                                </button>
                                <button type="button" className="admin-btn">
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}