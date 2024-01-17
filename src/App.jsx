import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inicio from "./pages/Inicio";
import Archivos from "./pages/Archivos";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <Sidebar />
          <div style={{ width: "100%" }}>
            <Navbar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/archivos" element={<Archivos />} />
                <Route path="/contacto" element={<Contacto />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
