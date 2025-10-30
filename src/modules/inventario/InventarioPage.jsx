import { useState } from "react";
import { useAuth } from "../../context/useAuth";
import Sidebar from "../../components/Sidebar";
import productosBase from "../../data/productosBase.js";

import "../../theme.css"
import "./inventario.css";

export default function InventarioPage() {
    const { user } = useAuth();
    const [sidebarColapsada, setSidebarColapsada] = useState(false);
    const [busqueda, setBusqueda] = useState("");
    const [filtroFamilia, setFiltroFamilia] = useState("todas");
    const [filtroEstado, setFiltroEstado] = useState("todos");
    const [expandido, setExpandido] = useState(null);

    const determinarEstado = (lote) => {
        const hoy = new Date();
        const caducidad = new Date(lote.fechaCaducidad);
        const diasRestantes = Math.ceil((caducidad - hoy) / (1000 * 60 * 60 * 24));

        if (diasRestantes <= 0) return "caducado";
        if (diasRestantes <= 15) return "proximo";
        if (lote.piezas < 100) return "bajo";
        return "ok";
    };

    const productosFiltrados = productosBase
        .filter((prod) =>
            prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
        )
        .filter((prod) =>
            filtroFamilia === "todas" ? true : prod.familia === filtroFamilia
        )
        .map((prod) => ({
            ...prod,
            lotes: prod.lotes.filter((lote) => {
                const estado = determinarEstado(lote);
                if (filtroEstado === "todos") return true;
                return estado === filtroEstado;
            }),
        }));

    const familiasUnicas = [...new Set(productosBase.map((p) => p.familia))];

    return (
        <div className="flex min-h-screen bg-gray-950 text-white">
            {/* === Sidebar reutilizable === */}
            <Sidebar onToggle={setSidebarColapsada} />

            {/* === Contenido principal que se ajusta === */}
            <div
                className={`flex-1 p-6 transition-all duration-300 ${
                    sidebarColapsada ? "ml-[80px]" : "ml-[240px]"
                }`}
            >
                {/* Topbar */}
                <nav className="dash-topbar">
                    <div className="dash-brand">
                        <span className="dot" />
                        <span className="brand-text">Inventario General</span>
                    </div>

                    <div className="dash-user">
                        <span className="user-pill">
                            {user?.name?.toUpperCase() || "USUARIO"} ·{" "}
                            {user?.role?.toUpperCase() || "ROL"}
                        </span>
                    </div>
                </nav>

                {/* === Contenido del inventario === */}
                <div className="inventario-container">
                    <h1 className="inventario-title">Inventario General</h1>
                    <p className="inventario-subtitle">
                        Consulta detallada de existencias y trazabilidad por lote.
                    </p>

                    {/* === FILTROS === */}
                    <div className="filtros-container">
                        <input
                            type="text"
                            placeholder="🔍 Buscar producto o lote..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                            className="filtro-input"
                        />

                        <select
                            value={filtroFamilia}
                            onChange={(e) => setFiltroFamilia(e.target.value)}
                            className="filtro-select"
                        >
                            <option value="todas">Todas las familias</option>
                            {familiasUnicas.map((fam) => (
                                <option key={fam} value={fam}>
                                    {fam}
                                </option>
                            ))}
                        </select>

                        <select
                            value={filtroEstado}
                            onChange={(e) => setFiltroEstado(e.target.value)}
                            className="filtro-select"
                        >
                            <option value="todos">Todos los estados</option>
                            <option value="ok">🟢 En buen estado</option>
                            <option value="proximo">🟡 Próximo a caducar</option>
                            <option value="bajo">🟠 Bajo inventario</option>
                            <option value="caducado">🔴 Caducado</option>
                        </select>
                    </div>

                    {/* === TABLAS POR FAMILIA === */}
                    {productosFiltrados.map((familia, idx) => (
                        <div key={idx} className="familia-bloque">
                            <h2 className="familia-titulo">{familia.familia}</h2>

                            <table className="inventario-tabla">
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>N° Lote</th>
                                        <th>Encargado</th>
                                        <th>Producción</th>
                                        <th>Caducidad</th>
                                        <th>Piezas</th>
                                        <th>Estado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {familia.lotes.map((lote, i) => {
                                        const estado = determinarEstado(lote);
                                        const idFila = `${familia.nombre}-${i}`;
                                        const expandida = expandido === idFila;

                                        return (
                                            <>
                                                <tr
                                                    key={idFila}
                                                    className={`fila-lote estado-${estado}`}
                                                    onClick={() =>
                                                        setExpandido(
                                                            expandida ? null : idFila
                                                        )
                                                    }
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <td>{familia.nombre}</td>
                                                    <td>{lote.lote}</td>
                                                    <td>{lote.encargado}</td>
                                                    <td>{lote.fechaProduccion}</td>
                                                    <td>{lote.fechaCaducidad}</td>
                                                    <td>{lote.piezas}</td>
                                                    <td>
                                                        {estado === "ok" && "🟢 Correcto"}
                                                        {estado === "proximo" &&
                                                            "🟡 Próximo a caducar"}
                                                        {estado === "bajo" &&
                                                            "🟠 Bajo stock"}
                                                        {estado === "caducado" &&
                                                            "🔴 Caducado"}
                                                    </td>
                                                </tr>

                                                {expandida && (
                                                    <tr className="fila-nota">
                                                        <td colSpan="7">
                                                            <div className="nota-lote">
                                                                <strong>
                                                                    Notas del lote:
                                                                </strong>
                                                                <p>
                                                                    {lote.notas ||
                                                                        "Sin notas registradas."}
                                                                </p>
                                                                <small>
                                                                    Ingresado por{" "}
                                                                    {lote.encargado} el{" "}
                                                                    {
                                                                        lote.fechaProduccion
                                                                    }
                                                                </small>

                                                                {/* 🔧 Botón futuro */}
                                                                <div className="nota-footer">
                                                                    <button
                                                                        className="btn-proceso"
                                                                        disabled
                                                                    >
                                                                        Datos de
                                                                        producción…
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}