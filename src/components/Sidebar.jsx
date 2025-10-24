import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import {
  Home,
  Package,
  BarChart3,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import "./Sidebar.css";

export default function Sidebar({ onToggle }) {
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);

  // 🔧 Menús dinámicos por rol
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
      { path: "/dashboard", name: "Dashboard", icon: <Home size={18} /> },
      { path: "/reportes", name: "Reportes", icon: <BarChart3 size={18} /> },
    ],
    admin: [
      { path: "/dashboard", name: "Dashboard", icon: <Home size={18} /> },
      { path: "/inventario", name: "Inventario", icon: <Package size={18} /> },
      { path: "/reportes", name: "Reportes", icon: <BarChart3 size={18} /> },
    ],
  };

  const links = routesByRole[user?.role] || [];

  const handleToggle = () => {
    const nuevoEstado = !collapsed;
    setCollapsed(nuevoEstado);
    if (onToggle) onToggle(nuevoEstado);
  };

  const esAdmin =
    user?.role === "admin" || user?.role === "direccion"; // 🧱 condición para mostrar el botón especial

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="dot" />
          {!collapsed && <h2 className="logo-text">Lechera 22</h2>}
        </div>

        <button
          className="toggle-btn"
          onClick={handleToggle}
          title="Colapsar menú"
        >
          <ChevronLeft
            size={20}
            className={`transition-transform ${collapsed ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {/* === Enlaces principales === */}
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

      {/* === Acceso especial solo admin/dirección === */}
      {esAdmin && (
        <div className="sidebar-admin">
          <NavLink
            to="/administracion"
            className={({ isActive }) =>
              `sidebar-link admin-link ${isActive ? "active" : ""}`
            }
          >
            <Settings size={18} />
            {!collapsed && <span>Administración</span>}
          </NavLink>
        </div>
      )}

      {/* === Cierre de sesión === */}
      <div className="sidebar-footer">
        <button onClick={logout} className="logout-btn">
          <LogOut size={18} />
          {!collapsed && <span>Salir</span>}
        </button>
      </div>
    </aside>
  );
}