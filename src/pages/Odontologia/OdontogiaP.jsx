import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Odontologia from "../../data/OdontologiaData";



const OdontologiaP = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="cirujanos-container">
                
                <div className="cirujanos-grid">
                    { Odontologia.map( Odontologia2 => (
                       <div
                       key={ Odontologia2.id}
                       className="cirujano-card"
                       onClick={() => navigate(`/Odontologia/${ Odontologia2.id}`)}
                     >
                       <img src={ Odontologia2.imagen} alt={`Odontologia ${ Odontologia2.id}`} className="cirujano-img" />
                       <button
                         className="cirujano-btn"
                         onClick={(e) => {
                           e.stopPropagation();
                           navigate(`/Odontologia/${ Odontologia2.id}`);
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

export default OdontologiaP;
