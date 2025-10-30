import { useState } from "react";
import { useAuth } from "../../context/useAuth"; // 👈 usamos el contexto centralizado
import "../../theme.css";
import "./login.css";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth(); // integración con AuthProvider

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);

    if (!success) {
      setError("Usuario o contraseña incorrectos");
    } else {
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
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