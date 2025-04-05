import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import bariatricos from "../../../data/Bariatricos";

const BariatricoDetalle = () => {
  const { id } = useParams();
  const cirujano =  bariatricos.find(c => c.id === parseInt(id));

  if (!cirujano) {
    return (
      <div>
        <Header />
        <div style={{ padding: "40px", textAlign: "center" }}>
          <h2>Cirujano no encontrado</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="Detalle-container">
        <img src={ bariatricos.detalle} alt={`Detalle de ${ bariatricos.nombre}`} className="Detalle-img" />
      </div>
      <Footer />
    </div>
  );
};

export default BariatricoDetalle  

