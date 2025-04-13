import { useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import cirujanos from "../../../data/cirujanosData";
import "./CirujanoDatalle.css";

const CirujanoDetalle = () => {
  const { id } = useParams();
  const cirujano = cirujanos.find(c => c.id === parseInt(id));

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
        <img
          src={cirujano.detalle}
          alt={`Detalle de ${cirujano.nombre}`}
          className="Detalle-img"
        /> 
        <a
          href="https://101fintech.com/Crediplas/SolicitudFinanciacion.html "
          target="_blank"
          rel="noopener noreferrer"
          className="financiacion-boton"
        >
          ¡HAGA CLIC AQUÍ PARA SOLICITAR FINANCIACIÓN DE TU CIRUGÍA PLÁSTICA CON CREDIPLAS COLOMBIA AHORA!
        </a>
      </div>
      <Footer />
    </div>
  );
};


export default CirujanoDetalle;
