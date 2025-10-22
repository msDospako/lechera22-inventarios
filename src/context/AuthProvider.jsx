import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    // 🧠 Mantener sesión persistente
    const [user, setUser] = useState(() => {
        const stored = localStorage.getItem("user");
        return stored ? JSON.parse(stored) : null;
    });

    useEffect(() => {
        if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        } else {
        localStorage.removeItem("user");
        }
    }, [user]);

    const login = (username, password) => {
        const usuarios = {
        operador: { password: "1234", role: "operador", redirect: "/inventario" },
        supervisor: { password: "1234", role: "supervisor", redirect: "/dashboard" },
        direccion: { password: "1234", role: "direccion", redirect: "/reportes" },
        admin: { password: "1234", role: "admin", redirect: "/administracion" },
        };

        const usuarioValido = usuarios[username];
        if (usuarioValido && usuarioValido.password === password) {
        setUser({ name: username, role: usuarioValido.role });
        navigate(usuarioValido.redirect);
        return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;