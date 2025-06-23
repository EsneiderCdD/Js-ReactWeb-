import { Link } from 'react-router-dom';
import './Home.module.css';

function Home() {
    return (
        <div>
            <h1>Playgrounds de JavaScript</h1>
            <ul>
                <li><Link to="/slider">Slider - Ejercicio 1</Link></li>
                {/* Agrega más links a nuevos temas */}
            </ul>
        </div>
    );
}

export default Home;
