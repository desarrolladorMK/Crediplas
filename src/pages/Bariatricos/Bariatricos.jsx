import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import bariatricos from "../../data/BariatricosData";


const BariatricosP = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      padding: "40px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "#f5f5f5",
    },
    grid: {
      display: "flex",
      flexWrap: "wrap",
      gap: "30px",
      justifyContent: "center",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    card: {
      width: "280px",
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
    img: {
      width: "100%",
      height: "320px",
      objectFit: "cover",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: " #003a44",
      color: "#fff",
      border: "none",
      fontWeight: "bold",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div>
      <Header />
      <div style={styles.container}>
        <div style={styles.grid}>
          {bariatricos.map((b) => (
            <div
              key={b.id}
              style={styles.card}
              onClick={() => navigate(`/bariatricos/${b.id}`)}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={b.imagen} alt={`bariatricos ${b.id}`} style={styles.img} />
              <button
                style={styles.button}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/bariatricos/${b.id}`);
                }}
              >
                Más información
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BariatricosP;