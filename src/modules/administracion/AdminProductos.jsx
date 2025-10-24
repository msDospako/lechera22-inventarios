import { useState } from "react";

export default function AdminProductos() {
    const [showModal, setShowModal] = useState(false);

    const productos = [
        { id: 1, nombre: "Yogurt Fresa 1L", familia: "Yogurt", estado: "Activo", stockMin: 1000 },
        { id: 2, nombre: "Bebida Láctea Chocolate 500ml", familia: "Bebidas", estado: "Activo", stockMin: 800 },
        { id: 3, nombre: "Crema Natural 1kg", familia: "Crema", estado: "Inactivo", stockMin: 500 },
        { id: 4, nombre: "Yogurt Griego 500g", familia: "Griego", estado: "Activo", stockMin: 600 },
    ];

    return (
        <section className="admin-seccion">
            <h2 className="admin-subtitulo">Gestión de Productos</h2>

            {/* === Botón de acción principal === */}
            <div className="admin-acciones">
                <button className="admin-btn" onClick={() => setShowModal(true)}>
                    + Nuevo producto
                </button>
            </div>

            {/* === Tabla de productos === */}
            <div className="admin-tabla">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Familia</th>
                            <th>Estado</th>
                            <th>Stock Mínimo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nombre}</td>
                                <td>{p.familia}</td>
                                <td className={`estado ${p.estado.toLowerCase()}`}>{p.estado}</td>
                                <td>{p.stockMin.toLocaleString()}</td>
                                <td>
                                    <button className="admin-btn edit">Editar</button>
                                    <button className="admin-btn disable">
                                        {p.estado === "Activo" ? "Desactivar" : "Activar"}
                                    </button>
                                    <button className="admin-btn reset">Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* === Modal de nuevo producto (solo visual) === */}
            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()} // evita cerrar al hacer clic dentro
                    >
                        <h3>Agregar nuevo producto</h3>
                        <form className="admin-form">
                            <input type="text" placeholder="Nombre del producto" />
                            <select>
                                <option value="">Seleccionar familia</option>
                                <option value="Yogurt">Yogurt</option>
                                <option value="Bebidas">Bebidas</option>
                                <option value="Crema">Crema</option>
                                <option value="Griego">Griego</option>
                            </select>
                            <input type="number" placeholder="Stock mínimo" />
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