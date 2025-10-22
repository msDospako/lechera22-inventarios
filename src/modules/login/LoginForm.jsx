import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Importamos los estilos del módulo

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userRoles = {
        operador: "/inventario",
        supervisor: "/dashboard",
        direccion: "/reportes",
        admin: "/administracion",
        };

        if (userRoles[username] && password === "1234") {
        navigate(userRoles[username]);
        } else {
        setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input" // 👈 clase aplicada
        />

        <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input" // 👈 clase aplicada
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit" className="login-button">
            Ingresar
        </button>

        <p className="login-footer">
            © 2025 Lechera 22 Amigos — Todos los derechos reservados
        </p>
        </form>
    );
}