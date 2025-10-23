export default function ReportesFiltros() {
    return (
        <section className="reportes-filtros">
        <h2 className="reportes-subseccion">Filtros de información</h2>

        <div className="filtros-grid">
            <input type="date" className="filtro-input" placeholder="Desde" />
            <input type="date" className="filtro-input" placeholder="Hasta" />

            <select className="filtro-select">
            <option value="">Área</option>
            <option value="produccion">Producción</option>
            <option value="distribucion">Distribución</option>
            <option value="inventario">Inventario</option>
            </select>

            <select className="filtro-select">
            <option value="">Tipo de reporte</option>
            <option value="rendimiento">Rendimiento</option>
            <option value="eficiencia">Eficiencia</option>
            <option value="fallas">Fallas</option>
            </select>

            <button className="btn-filtrar">Aplicar filtros</button>
        </div>
        </section>
    );
    }