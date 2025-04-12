import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Implante.css"; 

const Implante = () => {
    return (
        <div>
            <Header />
            <h1>Implante</h1>
            <div className="video-container">
                <video 
                    src="/video-implante1.mp4" 
                    controls 
                    autoPlay 
                    muted 
                    loop 
                />
            </div>
            <Footer />
        </div>
    );
};

export default Implante;
