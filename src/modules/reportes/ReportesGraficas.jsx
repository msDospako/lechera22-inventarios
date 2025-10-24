import {
    ResponsiveContainer,
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
} from "recharts";

export default function ReportesGraficas({ registros }) {
    return (
        <section className="reportes-seccion">
            <h2 className="reportes-subtitulo">Tendencias del mes</h2>

            <div
                className="grafica-wrapper"
                style={{
                    background: "#151a28",
                    border: "1px solid #2a3145",
                    borderRadius: "12px",
                    padding: "16px",
                }}
            >
                <ResponsiveContainer width="100%" height={350}>
                    <ComposedChart data={registros}>
                        <CartesianGrid stroke="#2a3145" strokeDasharray="3 3" />
                        <XAxis dataKey="fecha" tick={{ fill: "#b0b8cc", fontSize: 12 }} />
                        <YAxis
                            yAxisId="left"
                            orientation="left"
                            tick={{ fill: "#b0b8cc" }}
                            label={{
                                value: "Producción (u)",
                                angle: -90,
                                position: "insideLeft",
                                style: { fill: "#b0b8cc" },
                            }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            tick={{ fill: "#b0b8cc" }}
                            label={{
                                value: "Eficiencia (%)",
                                angle: 90,
                                position: "insideRight",
                                style: { fill: "#b0b8cc" },
                            }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#1e2435",
                                border: "1px solid #2a3145",
                                borderRadius: "8px",
                                color: "#fff",
                            }}
                        />
                        <Legend
                            verticalAlign="top"
                            height={36}
                            wrapperStyle={{ color: "#fff" }}
                        />
                        <Bar
                            yAxisId="left"
                            dataKey="produccion"
                            fill="#ff5959"
                            name="Producción"
                            barSize={18}
                            radius={[4, 4, 0, 0]}
                        />
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="eficiencia"
                            stroke="#22d3ee"
                            strokeWidth={2}
                            dot={false}
                            name="Eficiencia"
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}