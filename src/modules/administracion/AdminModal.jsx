import { useEffect } from "react";
import "./administracion.css";

export default function AdminModal({ visible, titulo, mensaje, onConfirm, onCancel }) {
    // Cerrar con tecla Esc
    useEffect(() => {
        const handleKey = (e) => e.key === "Escape" && onCancel();
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onCancel]);

    if (!visible) return null;

    return (
        <div className="admin-modal-overlay">
            <div className="admin-modal">
                <h3 className="admin-modal-title">{titulo}</h3>
                <p className="admin-modal-text">{mensaje}</p>
                <div className="admin-modal-actions">
                    <button className="admin-btn-sec" onClick={onCancel}>
                        Cancelar
                    </button>
                    <button className="admin-btn" onClick={onConfirm}>
                        Confirmar
                    </button>
                </div>
            </div>
        </div>
    );
}