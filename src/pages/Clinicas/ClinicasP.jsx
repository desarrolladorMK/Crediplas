import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import Clinica from "../../data/ClinicaData";



const ClinicaP = () => {
    const navigate = useNavigate();

    
    return (
        <div>
            <Header />
            <div className="cirujanos-container">
                
                <div className="cirujanos-grid">
                    { Clinica.map( Clinica2 => (
                       <div
                       key={ Clinica2.id}
                       className="cirujano-card"
                       onClick={() => navigate(`/Clinica/${ Clinica2.id}`)}
                     >
                       <img src={ Clinica2.imagen} alt={`Clinica ${ Clinica2.id}`} className="cirujano-img" />
                       <button
                         className="cirujano-btn"
                         onClick={(e) => {
                           e.stopPropagation();
                           navigate(`/Clinica/${ Clinica2.id}`);
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

export default ClinicaP;
