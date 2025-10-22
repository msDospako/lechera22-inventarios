const datosSimulados = [
    { producto: "Yogurt Fresa", cumplimiento: "98%", devoluciones: "1.2%", rotacion: "12 días" },
    { producto: "Bebida Café", cumplimiento: "96%", devoluciones: "2.4%", rotacion: "9 días" },
    { producto: "Crema 1L", cumplimiento: "99%", devoluciones: "0.8%", rotacion: "14 días" },
    ];

    export default function ReportesTabla() {
    return (
        <table className="reportes-tabla">
        <thead>
            <tr>
            <th>Producto</th>
            <th>Cumplimiento</th>
            <th>Devoluciones</th>
            <th>Rotación</th>
            </tr>
        </thead>
        <tbody>
            {datosSimulados.map((r, i) => (
            <tr key={i}>
                <td>{r.producto}</td>
                <td>{r.cumplimiento}</td>
                <td>{r.devoluciones}</td>
                <td>{r.rotacion}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
}