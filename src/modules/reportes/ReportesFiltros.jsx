import { useState } from "react";

export default function ReportesFiltros() {
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [familia, setFamilia] = useState("todas");

    return (
        <div className="reportes-filtros">
        <input
            type="date"
            value={fechaInicio}
            onChange={(e) => setFechaInicio(e.target.value)}
        />
        <input
            type="date"
            value={fechaFin}
            onChange={(e) => setFechaFin(e.target.value)}
        />
        <select value={familia} onChange={(e) => setFamilia(e.target.value)}>
            <option value="todas">Todas las familias</option>
            <option value="yogurt">Yogurt</option>
            <option value="crema">Crema</option>
            <option value="bebidas">Bebidas</option>
        </select>
        <button className="btn-filtrar">Filtrar</button>
        </div>
    );
}