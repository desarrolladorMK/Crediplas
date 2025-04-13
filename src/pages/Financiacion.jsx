import Header from "../components/Header";
import Footer from "../components/Footer";

const Financiacion = () => {
  const styles = {
    container: {
      textAlign: "center",
      margin: "20px 0",
    },
    image: {
      width: "100%",
      maxWidth: "1200px",
      height: "auto",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <a
          href="https://www.101fintech.com/SolicitudTarjeta.aspx?fnt=Crediplas"
          className="banner-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/financiacion.jpg"
            alt="Financiación"
            style={styles.image}
          />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Financiacion;
