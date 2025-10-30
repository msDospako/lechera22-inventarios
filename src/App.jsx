import AppRouter from "./routes/AppRouter";
import "./theme.css";
import "./enhancements.css"

function App() {
    return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <AppRouter />
      
    </div>
  );
}

export default App;