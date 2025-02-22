import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const cirujanos = [
    { id: 1, nombre: "Dr. Juan Pérez", imagen: "https://via.placeholder.com/150", descripcion: "Especialista en cirugía general.", route: "/Perez" },
    { id: 2, nombre: "Dra. María López", imagen: "https://via.placeholder.com/150", descripcion: "Experta en cirugía plástica y reconstructiva.", route: "/cirujanos/2" },
    { id: 3, nombre: "Dr. Carlos Gómez", imagen: "https://via.placeholder.com/150", descripcion: "Especialista en cirugía cardiovascular.", route: "/cirujanos/3" },
    { id: 4, nombre: "Dra. Ana Rodríguez", imagen: "https://via.placeholder.com/150", descripcion: "Cirujana ortopédica y traumatóloga.", route: "/cirujanos/4" },
    { id: 5, nombre: "Dr. Luis Fernández", imagen: "https://via.placeholder.com/150", descripcion: "Especialista en cirugía pediátrica.", route: "/cirujanos/5" },
    { id: 6, nombre: "Dra. Sofía Martínez", imagen: "https://via.placeholder.com/150", descripcion: "Experta en cirugía neurológica.", route: "/cirujanos/6" }
];

const CirujanoP = () => {
    const navigate = useNavigate();
    
    return (
        <div>
            <Header />
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h1>Cirujanos</h1>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "20px" }}>
                    {cirujanos.map(cirujano => (
                        <div key={cirujano.id} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px", textAlign: "center" }}>
                            <img src={cirujano.imagen} alt={cirujano.nombre} style={{ width: "100px", borderRadius: "50%" }} />
                            <h3>{cirujano.nombre}</h3>
                            <p>{cirujano.descripcion}</p>
                            <button onClick={() => navigate(cirujano.route)} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                                Más información
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CirujanoP;
