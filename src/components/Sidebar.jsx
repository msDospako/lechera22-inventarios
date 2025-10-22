import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Package, BarChart3, Settings, LogOut, ChevronLeft } from "lucide-react";
import "./sidebar.css";

export default function Sidebar({ userRole, onLogout }) {
    const [collapsed, setCollapsed] = useState(false);

    const routesByRole = {
        operador: [
        { path: "/inventario", name: "Inventario", icon: <Package size={18} /> },
        ],
        supervisor: [
        { path: "/dashboard", name: "Dashboard", icon: <Home size={18} /> },
        { path: "/inventario", name: "Inventario", icon: <Package size={18} /> },
        { path: "/reportes", name: "Reportes", icon: <BarChart3 size={18} /> },
        ],
        direccion: [
        { path: "/reportes", name: "Reportes", icon: <BarChart3 size={18} /> },
        { path: "/dashboard", name: "Dashboard", icon: <Home size={18} /> },
        ],
        admin: [
        { path: "/administracion", name: "Administración", icon: <Settings size={18} /> },
        { path: "/dashboard", name: "Dashboard", icon: <Home size={18} /> },
        { path: "/reportes", name: "Reportes", icon: <BarChart3 size={18} /> },
        ],
    };

    const links = routesByRole[userRole] || [];

    return (
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        {/* Header */}
        <div className="sidebar-header">
            <div className="sidebar-logo">
            <span className="dot" />
            {!collapsed && <h2 className="logo-text">Lechera 22</h2>}
            </div>
            <button
            className="toggle-btn"
            onClick={() => setCollapsed(!collapsed)}
            title="Colapsar menú"
            >
            <ChevronLeft
                size={20}
                className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
            />
            </button>
        </div>

        {/* Links */}
        <nav className="sidebar-links">
            {links.map((link) => (
            <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
                }
            >
                {link.icon}
                {!collapsed && <span>{link.name}</span>}
            </NavLink>
            ))}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
            <button onClick={onLogout} className="logout-btn">
            <LogOut size={18} />
            {!collapsed && <span>Salir</span>}
            </button>
        </div>
        </aside>
    );
}