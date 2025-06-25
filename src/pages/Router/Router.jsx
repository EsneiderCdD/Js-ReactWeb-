import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import SliderRouter from '../../pages/Slider/SliderRouter';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                
                {/* Ruta modular del Slider */}
                <Route path="/slider/*" element={<SliderRouter />} />

                {/* Aquí agregarías más temas: */}
                {/* <Route path="/arrays/*" element={<ArraysRouter />} /> */}
            </Routes>
        </Router>
    );
}
