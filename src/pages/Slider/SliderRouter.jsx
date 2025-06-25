import { Routes, Route, Link } from 'react-router-dom';
import SliderHome from './SliderHome';
import BasicSlider from './BasicSlider';

export default function SliderRouter() {
    return (
        <div>
            <nav>
                <h2>Slider - Ejercicio 1</h2>
                <ul>
                    <li><Link to="/slider">Inicio Slider</Link></li>
                    <li><Link to="/slider/basic">Slider Básico</Link></li>
                    {/* Puedes agregar más subtemas */}
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<SliderHome />} />
                <Route path="basic" element={<BasicSlider />} />
                {/* Aquí agregas más subrutas */}
            </Routes>
        </div>
    );
}
