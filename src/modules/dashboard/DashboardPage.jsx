import { useAuth } from "../../context/useAuth";
import DashboardCard from "./DashboardCard";
import "./dashboard.css";

export default function DashboardPage() {
    const { user, logout } = useAuth();

    // Datos simulados (estáticos por ahora)
    const kpis = {
        hoyPedidos: 137,
        hoyIngresos: 21800,
        ult30Pedidos: 2822,
        ult30Ingresos: 448700,
        pendientesProceso: 43,
        devoluciones: 23,
        precisionInventario: 99.1,
        utilizacionAlmacen: 81,
        valorInventario: 4250000,
    };

    return (
        <div className="dash-root">
        {/* Topbar */}
        <nav className="dash-topbar">
            <div className="dash-brand">
            <span className="dot" />
            <span className="brand-text">Lechera 22 Amigos · Inventarios</span>
            </div>

            <div className="dash-user">
            <span className="user-pill">
                {user?.name?.toUpperCase() || "USUARIO"} · {user?.role?.toUpperCase() || "ROL"}
            </span>
            <button className="btn-logout" onClick={logout}>Salir</button>
            </div>
        </nav>

        {/* Grid principal */}
        <main className="dash-grid">
            {/* Columna izquierda KPIs rápidos */}
            <DashboardCard title="Hoy" subtitle="Resumen del día" emphasis>
            <div className="kpi-col">
                <div className="kpi-big">
                <span className="kpi-number">{kpis.hoyPedidos}</span>
                <span className="kpi-label">Pedidos</span>
                <span className="kpi-delta up">+35 vs mismo día semana pasada</span>
                </div>

                <div className="kpi-big money">
                <span className="kpi-number">${(kpis.hoyIngresos/1000).toFixed(1)}K</span>
                <span className="kpi-label">Ingresos</span>
                <span className="kpi-delta up">+5.6k vs semana pasada</span>
                </div>
            </div>
            </DashboardCard>

            {/* Centro alto: placeholder de "Pedidos hoy" (gráfica futura) */}
            <DashboardCard title="Pedidos hoy" subtitle="Entradas/Salidas por hora">
            <div className="placeholder-chart">
                <div className="bar bar-a" />
                <div className="bar bar-b" />
                <div className="bar bar-c" />
                <div className="bar bar-d" />
                <div className="bar bar-e" />
                <div className="bar bar-f" />
                <div className="bar bar-g" />
            </div>
            <p className="hint">Aquí irá una gráfica de barras (simulada por ahora).</p>
            </DashboardCard>

            {/* Derecha: estado de procesamiento */}
            <DashboardCard title="Procesamiento" subtitle="Órdenes sin cumplir">
            <div className="panel-right">
                <div className="alert-card">
                <div>
                    <div className="alert-number">{kpis.pendientesProceso}</div>
                    <div className="alert-text">órdenes sin completar</div>
                </div>
                <span className="alert-badge">!</span>
                </div>

                <div className="gauge">
                <div className="gauge-arc" />
                <div className="gauge-needle" />
                <div className="gauge-label">Tiempo prom. cumplimiento (7d)</div>
                <div className="gauge-value">6 hr</div>
                </div>

                <div className="block-small">
                <div className="num">{kpis.devoluciones}</div>
                <div className="txt">devoluciones por procesar</div>
                </div>
            </div>
            </DashboardCard>

            {/* Abajo izquierda: últimos 30 días */}
            <DashboardCard title="Últimos 30 días" subtitle="Volumen e ingresos">
            <div className="kpi-stack">
                <div>
                <div className="kpi-number">{kpis.ult30Pedidos.toLocaleString()}</div>
                <div className="kpi-label">Pedidos</div>
                <div className="kpi-delta up">+834 vs mes pasado</div>
                </div>
                <div className="sep" />
                <div>
                <div className="kpi-number">${(kpis.ult30Ingresos/1000).toFixed(1)}K</div>
                <div className="kpi-label">Ingresos</div>
                <div className="kpi-delta up">+132.6k vs mes pasado</div>
                </div>
            </div>
            </DashboardCard>

            {/* Abajo centro: pedidos del mes (placeholder de gráfica) */}
            <DashboardCard title="Pedidos este mes" subtitle="Tendencia diaria">
            <div className="placeholder-chart tall">
                {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className={`bar thin h-${(i%8)+3}`} />
                ))}
            </div>
            <p className="hint">Gráfica mensual (placeholder).</p>
            </DashboardCard>

            {/* Abajo derecha: inventario/almacén */}
            <DashboardCard title="Inventario / Almacén" subtitle="Estado actual">
            <div className="inv-grid">
                <div className="mini-gauge">
                <div className="ring ring-green" />
                <div className="mini-label">Precisión inventario</div>
                <div className="mini-value">{kpis.precisionInventario}%</div>
                </div>

                <div className="mini-gauge">
                <div className="ring ring-cyan" />
                <div className="mini-label">Utilización almacén</div>
                <div className="mini-value">{kpis.utilizacionAlmacen}%</div>
                </div>

                <div className="mini-card">
                <div className="mini-title">Valor de inventario</div>
                <div className="mini-money">${(kpis.valorInventario/1_000_000).toFixed(2)}M</div>
                </div>
            </div>
            </DashboardCard>
        </main>
        </div>
    );
}