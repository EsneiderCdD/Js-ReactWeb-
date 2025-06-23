// src/router/Router.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Slider from '../../pages/Slider/Slider';
// Importa más temas según los vayas creando

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/slider" element={<Slider />} />
                {/* Agregar más rutas dinámicamente */}
            </Routes>
        </Router>
    );
}
