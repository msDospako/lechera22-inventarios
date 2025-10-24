import { useState } from "react";

export default function AdminParametros() {
    const [showModal, setShowModal] = useState(false);

    const parametros = [
        { id: 1, nombre: "Límite bajo de inventario", valor: "100 unidades", descripcion: "Cantidad mínima antes de marcar un producto como 'Bajo stock'" },
        { id: 2, nombre: "Tolerancia de caducidad", valor: "15 días", descripcion: "Días previos a la fecha de caducidad para alertar 'Próximo a caducar'" },
        { id: 3, nombre: "Tiempo máximo de entrega", valor: "48 horas", descripcion: "Límite de tiempo permitido para cumplir pedidos desde el registro" },
        { id: 4, nombre: "Frecuencia de actualización de reportes", valor: "Cada 24 horas", descripcion: "Intervalo de actualización automática de datos de reportes" },
        { id: 5, nombre: "Usuarios simultáneos permitidos", valor: "10", descripcion: "Máximo número de usuarios activos al mismo tiempo en el sistema" },
    ];

    return (
        <section className="admin-seccion">
            <h2 className="admin-subtitulo">Parámetros del Sistema</h2>

            {/* === Botón de acción === */}
            <div className="admin-acciones">
                <button className="admin-btn" onClick={() => setShowModal(true)}>
                    + Agregar nuevo parámetro
                </button>
            </div>

            {/* === Tabla de parámetros === */}
            <div className="admin-tabla">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre del Parámetro</th>
                            <th>Valor Actual</th>
                            <th>Descripción</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {parametros.map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nombre}</td>
                                <td>{p.valor}</td>
                                <td>{p.descripcion}</td>
                                <td>
                                    <button className="admin-btn edit">Editar</button>
                                    <button className="admin-btn-sec">Restablecer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* === Modal visual === */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Agregar nuevo parámetro</h3>

                        <form className="admin-form">
                            <input type="text" placeholder="Nombre del parámetro" />
                            <input type="text" placeholder="Valor inicial" />
                            <textarea
                                placeholder="Descripción o propósito del parámetro"
                                rows="3"
                                className="textarea-parametro"
                            ></textarea>

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