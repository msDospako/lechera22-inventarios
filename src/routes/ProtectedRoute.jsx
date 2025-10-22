import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export default function ProtectedRoute({ children }) {

    const { user } = useAuth();

    // Si no hay usuario, redirige al login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Si hay usuario, renderiza el contenido protegido
    return children;
};