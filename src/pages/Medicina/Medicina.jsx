import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Medicina from "../../data/MedicinaData";



const MedicinaP = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="cirujanos-container">
                <h1>Medicina Estética</h1>
                <div className="cirujanos-grid">
                    { Medicina.map( Medicina2 => (
                       <div
                       key={ Medicina2.id}
                       className="cirujano-card"
                       onClick={() => navigate(`/Medicina/${ Medicina2.id}`)}
                     >
                       <img src={ Medicina2.imagen} alt={`Medicina ${ Medicina2.id}`} className="cirujano-img" />
                       <button
                         className="cirujano-btn"
                         onClick={(e) => {
                           e.stopPropagation();
                           navigate(`/Medicina/${ Medicina2.id}`);
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

export default MedicinaP ;
