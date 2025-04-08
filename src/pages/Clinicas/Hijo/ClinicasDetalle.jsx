import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Clinica from "../../../data/ClinicaData";

const OdontologiaDetalle = () => {
  const { id } = useParams();
  const Clinica2  =  Clinica .find(c => c.id === parseInt(id));

  if (!Clinica2 ) {
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
        <img src={ Clinica2.detalle} alt={`Detalle de ${ Clinica2.nombre}`} className="Detalle-img" />
      </div>
      <Footer />
    </div>
  );
};

export default OdontologiaDetalle