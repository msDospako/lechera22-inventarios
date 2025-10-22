import Sidebar from "./Sidebar";
import { useAuth } from "../context/useAuth";

export default function Layout({ children }) {
    const { user } = useAuth();

    return (
        <div className="flex min-h-screen bg-gray-950 text-white">
        <Sidebar user={user} />
        <main className="flex-1 p-6">{children}</main>
        </div>
    );
}