import { useState } from 'react';
import styles from './BasicSlider.module.css';
import Explicacion from '../../components/Explicacion/Explicacion';
import { contenidoExplicacion } from './data/basicSliderData'; // 👈 Importamos solo esto

export default function BasicSlider() {
    const images = [
        'https://i.pinimg.com/736x/0b/b9/8c/0bb98c92210c237df5b19efcba1dd21b.jpg',
        'https://i.pinimg.com/736x/b2/25/b6/b225b631eea5c3196e7ef38ad28d5489.jpg',
        'https://i.pinimg.com/736x/c7/96/e1/c796e171322df24e711fffdcfc4eed14.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [mostrarExplicacion, setMostrarExplicacion] = useState(false);

    const goToNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(images.length - 1);
        }
    };

    return (
        <div className={styles.slider}>
            <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
            <div className={styles.controls}>
                <button onClick={goToPrevious}>Anterior</button>
                <button onClick={goToNext}>Siguiente</button>
                <button onClick={() => setMostrarExplicacion(!mostrarExplicacion)}>
                    {mostrarExplicacion ? 'Ocultar Explicación' : 'Mostrar Explicación'}
                </button>
            </div>

            {mostrarExplicacion && <Explicacion contenido={contenidoExplicacion} />}
        </div>
    );
}
