import a0 from '../../../assets/images/a0.png';
import a1 from '../../../assets/images/a1.png';
import a2 from '../../../assets/images/a2.png';
import a3 from '../../../assets/images/a3.png';
import a4 from '../../../assets/images/a4.png';

export const contenidoExplicacion = [
    { tipo: 'titulo', texto: 'Anatomía de un Slider' },
    { tipo: 'subtitulo', texto: 'Paso 1: Definir las imágenes' },
    { tipo: 'parrafo', texto: 'Lo primero que necesitamos es crear una lista de imágenes. Para esto, declaramos un arreglo llamado images que contiene las URLs de las imágenes que queremos mostrar en el slider.' },
    { tipo: 'imagen', src: a0 },

    { tipo: 'subtitulo', texto: 'Paso 2: Controlar cuál imagen se muestra' },
    { tipo: 'parrafo', texto: 'Para saber cuál imagen debe mostrarse, usamos un estado llamado currentIndex. Este estado guarda el número (índice) de la imagen que está visible en ese momento.' },
    { tipo: 'imagen', src: a1 },
    { tipo: 'parrafo', texto: 'El valor inicial es 0, lo que significa que el slider comenzará mostrando la primera imagen del arreglo.' },

    { tipo: 'subtitulo', texto: 'Paso 3: Cambiar la imagen' },
    { tipo: 'parrafo', texto: '"goToNext" y "goToPrevious" son funciones que cambian el valor de currentIndex. Estas funciones cambian el valor de currentIndex usando setCurrentIndex, y gracias a esto, React automáticamente actualiza la imagen que se muestra.' },
    { tipo: 'imagen', src: a2 },

    { tipo: 'subtitulo', texto: 'Paso 4: Mostrar la imagen actual' },
    { tipo: 'imagen', src: a3 },
    { tipo: 'parrafo', texto: 'Usamos la propiedad "src" de la imagen para mostrar la imagen actual en el slider. Si currentIndex es 0, la primera imagen se muestra. Si currentIndex es 1, la segunda imagen se muestra, y así sucesivamente.' },

    { tipo: 'subtitulo', texto: 'Paso 5: Crear los botones de navegación' },
    { tipo: 'imagen', src: a4 }
];
