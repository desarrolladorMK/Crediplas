import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import bariatricos from "../../../data/BariatricosData";

const BariatricoDetalle = () => {
  const { id } = useParams();
  const bariatricos2  =  bariatricos.find(c => c.id === parseInt(id));

  if (!bariatricos2 ) {
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
        <img src={ bariatricos2.detalle} alt={`Detalle de ${ bariatricos2.nombre}`} className="Detalle-img" />
      </div>
      <Footer />
    </div>
  );
};

export default BariatricoDetalle  

