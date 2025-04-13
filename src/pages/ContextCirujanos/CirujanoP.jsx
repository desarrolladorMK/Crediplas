import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import cirujanos from "../../data/cirujanosData"; // ruta relativa
import "./CirujanoP.css"; // Importa el CSS



const CirujanoP = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="cirujanos-container">
               
                <div className="cirujanos-grid">
                    {cirujanos.map(cirujano => (
                       <div
                       key={cirujano.id}
                       className="cirujano-card"
                       onClick={() => navigate(`/cirujano/${cirujano.id}`)}
                     >
                       <img src={cirujano.imagen} alt={`Cirujano ${cirujano.id}`} className="cirujano-img" />
                       <button
                         className="cirujano-btn"
                         onClick={(e) => {
                           e.stopPropagation();
                           navigate(`/cirujano/${cirujano.id}`);
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

export default CirujanoP;
