export default function DashboardCard({ title, subtitle, children, emphasis=false }) {
    return (
        <section
        className={
            `rounded-3xl p-5 border transition-all duration-300 hover:scale-[1.05] 
            ${emphasis 
                ? "bg-[#1b2130] border-[#2a3145] shadow-[0_8px_30px_rgba(0,0,0,0.2)]" 
                : "bg-[#151a28] border-[#242b3d] shadow-[0_6px_20px_rgba(0,0,0,0.12)]"}`
        }
        >
        {title && (
            <header className="mb-2">
            <h3 className="text-sm uppercase tracking-widest text-[#9aa3b2]">{title}</h3>
            {subtitle && <p className="text-xs text-[#77809a]">{subtitle}</p>}
            </header>
        )}
        <div>{children}</div>
        </section>
    );
}