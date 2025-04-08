import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import bariatricos from "../../data/BariatricosData";



const BariatricosP = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="cirujanos-container">
                <h1>Cirujanos Bariatricos</h1>
                <div className="cirujanos-grid">
                    { bariatricos.map( bariatricos2 => (
                       <div
                       key={ bariatricos2.id}
                       className="cirujano-card"
                       onClick={() => navigate(`/bariatricos/${ bariatricos2.id}`)}
                     >
                       <img src={ bariatricos2.imagen} alt={`bariatricos ${ bariatricos2.id}`} className="cirujano-img" />
                       <button
                         className="cirujano-btn"
                         onClick={(e) => {
                           e.stopPropagation();
                           navigate(`/bariatricos/${ bariatricos2.id}`);
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

export default BariatricosP;
