import { useState } from "react";
import "./reportes.css";

export default function ReportesFiltros() {
    const [mostrarModal, setMostrarModal] = useState(false);

    return (
        <section className="reportes-filtros">
            <h2 className="reportes-subtitulo">Filtros de información</h2>

            <div className="filtros-grid">
                <div className="filtro-item">
                    <label>Desde:</label>
                    <input type="date" className="filtro-input" />
                </div>

                <div className="filtro-item">
                    <label>Hasta:</label>
                    <input type="date" className="filtro-input" />
                </div>

                <div className="filtro-item">
                    <label>Área:</label>
                    <select className="filtro-select">
                        <option value="">Seleccionar</option>
                        <option value="produccion">Producción</option>
                        <option value="distribucion">Distribución</option>
                        <option value="inventario">Inventario</option>
                    </select>
                </div>

                <div className="filtro-item">
                    <label>Tipo de reporte:</label>
                    <select className="filtro-select">
                        <option value="">Seleccionar</option>
                        <option value="rendimiento">Rendimiento</option>
                        <option value="eficiencia">Eficiencia</option>
                        <option value="fallas">Fallas</option>
                    </select>
                </div>

                <button
                    className="btn-filtrar"
                    onClick={() => setMostrarModal(true)}
                >
                    Aplicar filtros
                </button>
            </div>

            {/* === MODAL FLOTANTE === */}
            {mostrarModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3 className="modal-title">📊 Vista previa del reporte</h3>
                        <p className="modal-text">
                            Esta es una vista simulada del reporte generado según los filtros seleccionados.
                            <br />
                            (En versiones futuras mostrará información real.)
                        </p>
                        <button
                            className="btn-cerrar-modal"
                            onClick={() => setMostrarModal(false)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}