import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Medicina from "../../../data/MedicinaData";

const MedicinaDetalle = () => {
  const { id } = useParams();
  const Medicina2  =  Medicina  .find(c => c.id === parseInt(id));

  if (!Medicina2 ) {
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
        <img src={ Medicina2.detalle} alt={`Detalle de ${ Medicina2.nombre}`} className="Detalle-img" />
      </div>
      <Footer />
    </div>
  );
};

export default MedicinaDetalle

