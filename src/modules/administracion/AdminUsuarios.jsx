import { useState } from "react";

export default function AdminUsuarios() {
    const [showModal, setShowModal] = useState(false);

    const usuarios = [
        { id: 1, nombre: "María López", rol: "Operador", estado: "Activo", ultimoAcceso: "23/10/2025" },
        { id: 2, nombre: "Juan Pérez", rol: "Supervisor", estado: "Activo", ultimoAcceso: "22/10/2025" },
        { id: 3, nombre: "Ana Torres", rol: "Dirección", estado: "Inactivo", ultimoAcceso: "15/10/2025" },
        { id: 4, nombre: "Carlos Ruiz", rol: "Administrador", estado: "Activo", ultimoAcceso: "24/10/2025" },
    ];

    return (
        <section className="admin-seccion">
            <h2 className="admin-subtitulo">Gestión de Usuarios</h2>

            {/* === Botón para agregar nuevo usuario === */}
            <div className="admin-acciones">
                <button className="admin-btn" onClick={() => setShowModal(true)}>
                    + Nuevo usuario
                </button>
            </div>

            {/* === Tabla de usuarios === */}
            <div className="admin-tabla">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th>Último Acceso</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((u) => (
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.nombre}</td>
                                <td>{u.rol}</td>
                                <td className={`estado ${u.estado.toLowerCase()}`}>{u.estado}</td>
                                <td>{u.ultimoAcceso}</td>
                                <td>
                                    <button className="admin-btn edit">Editar</button>
                                    <button className="admin-btn disable">
                                        {u.estado === "Activo" ? "Desactivar" : "Activar"}
                                    </button>
                                    <button className="admin-btn reset">Reset</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* === Modal de nuevo usuario === */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Agregar nuevo usuario</h3>

                        <form className="admin-form">
                            <input type="text" placeholder="Nombre completo" />
                            <select>
                                <option value="">Seleccionar rol</option>
                                <option value="Operador">Operador</option>
                                <option value="Supervisor">Supervisor</option>
                                <option value="Dirección">Dirección</option>
                                <option value="Administrador">Administrador</option>
                            </select>
                            <input type="email" placeholder="Correo electrónico" />
                            <input type="password" placeholder="Contraseña temporal" />
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