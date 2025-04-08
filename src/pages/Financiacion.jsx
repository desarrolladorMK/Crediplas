import Header from "../components/Header";
import Footer from "../components/Footer";

const Financiacion = () => {
    const styles = {
        container: {
            textAlign: "center", // Centra la imagen horizontalmente
            margin: "20px 0", // Espaciado superior e inferior
        },
        image: {
            width: "100%", // La imagen ocupará todo el ancho del contenedor
            maxWidth: "1200px", // Tamaño máximo para pantallas grandes
            height: "auto", // Mantiene la proporción de la imagen
            borderRadius: "10px", // Bordes redondeados
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sombra para un efecto elegante
        },
    };

    return (
        <div>
            <Header />
            <div style={styles.container}>
                <img src="/financiacion.jpg" alt="Financiación" style={styles.image} />
            </div>
            <Footer />
        </div>
    );
};

export default Financiacion;