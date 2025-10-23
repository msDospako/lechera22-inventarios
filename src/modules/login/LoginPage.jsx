import LoginForm from "./LoginForm";
import "./login.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Sistema de Control de Inventarios</h1>
        <p className="login-subtitle">Lechera 22 Amigos</p>
        <LoginForm />
      </div>
    </div>
  );
}