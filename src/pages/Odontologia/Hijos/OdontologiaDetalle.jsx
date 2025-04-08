import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Odontologia from "../../../data/OdontologiaData";

const OdontologiaDetalle = () => {
  const { id } = useParams();
  const Odontologia2  =  Odontologia .find(c => c.id === parseInt(id));

  if (!Odontologia2 ) {
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
        <img src={ Odontologia2.detalle} alt={`Detalle de ${ Odontologia2.nombre}`} className="Detalle-img" />
      </div>
      <Footer />
    </div>
  );
};

export default OdontologiaDetalle

