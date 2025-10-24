import { useState } from "react";
import AdminModal from "./AdminModal";

export default function AdminSeguridad() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState("");

    const politicas = [
        { id: 1, nombre: "Longitud mínima", valor: "8 caracteres", estado: "Activo" },
        { id: 2, nombre: "Uso de caracteres especiales", valor: "Obligatorio", estado: "Activo" },
        { id: 3, nombre: "Expiración de contraseña", valor: "90 días", estado: "Activo" },
        { id: 4, nombre: "Bloqueo tras intentos fallidos", valor: "3 intentos", estado: "Activo" },
    ];

    const sesiones = [
        { id: 1, usuario: "María López", dispositivo: "PC Planta", ultimaConexion: "24/10/2025 09:10", estado: "Activa" },
        { id: 2, usuario: "Carlos Ruiz", dispositivo: "Laptop Oficina", ultimaConexion: "24/10/2025 08:35", estado: "Activa" },
        { id: 3, usuario: "Juan Pérez", dispositivo: "Tablet Supervisor", ultimaConexion: "23/10/2025 18:20", estado: "Cerrada" },
    ];

    const abrirModal = (tipo) => {
        setModalType(tipo);
        setModalVisible(true);
    };

    const confirmarAccion = () => {
        alert(`Acción confirmada: ${modalType}`);
        setModalVisible(false);
    };

    const cancelarAccion = () => setModalVisible(false);

    return (
        <section className="admin-seccion">
            <h2 className="admin-subtitulo">Seguridad y Autenticación</h2>

            {/* === POLÍTICAS DE SEGURIDAD === */}
            <h3 className="admin-subsubtitulo">Políticas de Contraseña</h3>
            <div className="admin-tabla">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Política</th>
                            <th>Valor</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {politicas.map((p) => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.nombre}</td>
                                <td>{p.valor}</td>
                                <td>{p.estado}</td>
                                <td>
                                    <button
                                        className="admin-btn"
                                        onClick={() => abrirModal(`Editar política: ${p.nombre}`)}
                                    >
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* === SESIONES ACTIVAS === */}
            <h3 className="admin-subsubtitulo" style={{ marginTop: "28px" }}>Sesiones Activas</h3>
            <div className="admin-tabla">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>Dispositivo</th>
                            <th>Última Conexión</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sesiones.map((s) => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.usuario}</td>
                                <td>{s.dispositivo}</td>
                                <td>{s.ultimaConexion}</td>
                                <td>{s.estado}</td>
                                <td>
                                    <button
                                        className="admin-btn-sec"
                                        onClick={() => abrirModal(`Cerrar sesión de ${s.usuario}`)}
                                    >
                                        Cerrar sesión
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* === ACCIONES GENERALES === */}
            <div style={{ marginTop: "16px", textAlign: "right" }}>
                <button
                    className="admin-btn-sec"
                    onClick={() => abrirModal("Restablecer contraseñas")}
                >
                    Restablecer contraseñas
                </button>
                <button
                    className="admin-btn"
                    onClick={() => abrirModal("Aplicar nuevas políticas")}
                >
                    Aplicar políticas
                </button>
            </div>

            {/* === MODAL FLOTANTE === */}
            <AdminModal
                visible={modalVisible}
                titulo="Confirmar acción"
                mensaje={`¿Deseas proceder con la acción: ${modalType}? Esta operación no se puede deshacer.`}
                onConfirm={confirmarAccion}
                onCancel={cancelarAccion}
            />
        </section>
    );
}