import { HelpCircle, BookOpen, Download, Mail, Info } from "lucide-react";
import Sidebar from "../../components/Sidebar";

import "../../theme.css";
import "./ayuda.css";

export default function AyudaPage() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <Sidebar />

      <div className="flex-1 p-6 ml-[240px] transition-all duration-300 ayuda-container">
        <header className="ayuda-header">
          <h1 className="ayuda-title">Centro de Ayuda y Soporte</h1>
          <p className="ayuda-subtitle">
            Encuentra respuestas, guías y asistencia para usar el sistema
            <strong> Lechera 22 Inventarios</strong>.
          </p>
        </header>

        {/* === SECCIÓN FAQ === */}
        <section className="ayuda-seccion">
          <div className="help-card">
            <HelpCircle size={32} className="help-icon" />
            <h2 className="help-title">Preguntas Frecuentes</h2>
            <ul className="help-list">
              <li>
                <strong>¿Cómo inicio sesión?</strong>  
                Ingresa tu usuario y contraseña asignados. Si no recuerdas tu
                acceso, contacta al área de administración.
              </li>
              <li>
                <strong>¿Qué hago si olvidé mi contraseña?</strong>  
                Solicita un restablecimiento al administrador del sistema.
              </li>
              <li>
                <strong>¿Dónde veo el inventario?</strong>  
                Desde el menú lateral selecciona <em>Inventario</em>.  
                Puedes filtrar por familia, estado o nombre de producto.
              </li>
              <li>
                <strong>¿Cómo genero reportes?</strong>  
                En el menú, entra a <em>Reportes</em> y usa los filtros por
                fecha o área para visualizar los datos del mes.
              </li>
              <li>
                <strong>¿Puedo modificar usuarios?</strong>  
                Solo los roles de <em>Dirección</em> y <em>Administrador</em> 
                tienen acceso a la sección de Administración.
              </li>
            </ul>
          </div>
        </section>

        {/* === SECCIÓN GUÍA RÁPIDA === */}
        <section className="ayuda-seccion">
          <div className="help-card">
            <BookOpen size={32} className="help-icon" />
            <h2 className="help-title">Guía Rápida de Uso</h2>
            <ol className="help-steps">
              <li>1️⃣ Inicia sesión con tu usuario asignado.</li>
              <li>2️⃣ Ingresa al <strong>Dashboard</strong> para ver datos generales.</li>
              <li>3️⃣ Revisa el módulo <strong>Inventario</strong> para controlar productos.</li>
              <li>4️⃣ Consulta <strong>Reportes</strong> para visualizar desempeño mensual.</li>
              <li>5️⃣ Si eres administrador, accede a <strong>Administración</strong> para gestionar el sistema.</li>
            </ol>
          </div>
        </section>

        {/* === SECCIÓN DESCARGAS / DOCUMENTOS === */}
        <section className="ayuda-seccion">
          <div className="help-card">
            <Download size={32} className="help-icon" />
            <h2 className="help-title">Manuales y Recursos</h2>
            <p>
              Aquí podrás consultar documentos y guías prácticas del sistema:
            </p>
            <ul className="help-links">
              <li>📄 Manual de Usuario (PDF)</li>
              <li>📊 Guía de Reportes y KPIs</li>
              <li>🔐 Políticas de Seguridad y Acceso</li>
              <li>🧭 Glosario de términos del sistema</li>
            </ul>
            <button className="help-btn">Descargar Manual General</button>
          </div>
        </section>

        {/* === SECCIÓN CONTACTO === */}
        <section className="ayuda-seccion">
          <div className="help-card">
            <Mail size={32} className="help-icon" />
            <h2 className="help-title">Soporte Técnico</h2>
            <p>
              Si presentas algún problema técnico o necesitas asistencia, puedes
              comunicarte con el área de soporte.
            </p>
            <div className="help-contact">
              <p>📧 <strong>soporte@lechera22.com.mx</strong></p>
              <p>📞 Extensión interna: <strong>102</strong></p>
              <p>🕒 Horario: Lunes a Viernes, 8:00 - 17:00 hrs</p>
            </div>
          </div>
        </section>

        {/* === SOBRE LA APLICACIÓN === */}
        <section className="ayuda-seccion">
          <div className="help-card about">
            <Info size={32} className="help-icon" />
            <h2 className="help-title">Sobre esta aplicación</h2>
            <p>
              <strong>Lechera 22 Inventarios</strong> es una aplicación desarrollada para el
              control integral de productos terminados, trazabilidad de lotes y
              generación de reportes de desempeño.
            </p>
            <p>
              Versión <strong>1.0.0</strong> — Octubre 2025.  
              Desarrollada por el equipo de ingeniería y UX de Lechera 22 Amigos.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}