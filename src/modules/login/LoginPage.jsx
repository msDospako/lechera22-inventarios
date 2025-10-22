import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 w-11/12 max-w-md transform transition-all duration-700 hover:scale-[1.01]">
        <h1 className="text-center text-3xl font-extrabold text-red-700 mb-2 tracking-tight">
          Sistema de Control de Inventarios
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-8 text-sm">
          Lechera 22 Amigos
        </p>
        <LoginForm />
      </div>
    </div>
  );
}