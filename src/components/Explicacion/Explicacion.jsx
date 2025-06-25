import styles from './Explicacion.module.css';

export default function Explicacion({ contenido }) {
    return (
        <div className={styles.explicacion}>
            {contenido.map((item, index) => {
                if (item.tipo === 'titulo') {
                    return <h2 key={index}>{item.texto}</h2>;
                }
                if (item.tipo === 'subtitulo') {
                    return <h4 key={index}>{item.texto}</h4>;
                }
                if (item.tipo === 'parrafo') {
                    return <p key={index}>{item.texto}</p>;
                }
                if (item.tipo === 'imagen') {
                    return <img key={index} src={item.src} alt={item.alt || 'Imagen de explicación'} />;
                }
                return null; // Por si llega un tipo no reconocido
            })}
        </div>
    );
}
