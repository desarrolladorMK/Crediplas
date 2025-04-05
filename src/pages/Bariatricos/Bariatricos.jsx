import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import bariatricos from "../../data/Bariatricos";



const BariatricosP = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="cirujanos-container">
                <h1>Cirujanos Bariatricos</h1>
                <div className="cirujanos-grid">
                    { bariatricos.map(bariatricos => (
                       <div
                       key={bariatricos.id}
                       className="cirujano-card"
                       onClick={() => navigate(`/cirujano/${bariatricos.id}`)}
                     >
                       <img src={bariatricos.imagen} alt={`Cirujano ${bariatricos.id}`} className="cirujano-img" />
                       <button
                         className="cirujano-btn"
                         onClick={(e) => {
                           e.stopPropagation();
                           navigate(`/cirujano/${bariatricos.id}`);
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
