import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Asegúrate de crear este archivo para los estilos personalizados
import { BrowserRouter as Router, Route, Routes, useNavigate, useParams } from 'react-router-dom';

// Datos de las imágenes con su información
const slides = [
    { src: "/cirujanos.jpg", alt: "", title: "",  route: "/cirujano-context" },
    { src: "/bariatrica.jpg", alt: "", title: "", route: "/bariatricos"},
    { src: "/odontologia.jpg", alt: "", title: "", description: "Tratamientos odontológicos avanzados." },
    { src: "/implantes.jpg", alt: "", title: "", description: "Implantes dentales y corporales." },
    { src: "/clinicas.jpg", alt: "", title: "", description: "Información sobre nuestras clínicas aliadas." },
    { src: "/turismo.jpg", alt: "", title: "", description: "Experiencias de turismo médico." },
    { src: "/suministros.jpg", alt: "", title: "", description: "Suministros y equipos médicos." },
];

// Componente Home con el carrusel
const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <br /><br />
            <Carousel controls={true} indicators={false} interval={null}>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={slide.src} alt={slide.alt} />
                        <Carousel.Caption>
                            <h3>{slide.title}</h3>
                            <p 
                                style={{ cursor: "pointer", opacity: 0 }}
                                onClick={() => navigate(slide.route)}
                            >
                                Más información
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            
            <div className="banner-section">
                <h2>Conoce nuestros métodos de financiación</h2>
                <img
                    className="banner-image"
                    src="/Baner.jpg"
                    alt="Banner"
                />
            </div>

            <div className="banner-section">
                <h2>Contáctanos con nosotros</h2>
                <img
                    className="banner-image"
                    src="/contacto.jpg"
                    alt="Banner"
                />
            </div><br /><br /><br />

            <div className="testimonials-section">
                <h2>Testimonios</h2>
                <div className="testimonials">
                    <div className="testimonial-card">
                        <img src="/test1.jpg" alt="Testimonio 1" className="testimonial-image" />
                       
                    </div>
                    <div className="testimonial-card">
                        <img src="/test2.jpg" alt="Testimonio 2" className="testimonial-image" />
                        
                    </div>
                    <div className="testimonial-card">
                        <img src="/test3.jpg" alt="Testimonio 3" className="testimonial-image" />
                        
                    </div>
                </div>
            </div><br /><br />
            <div className="banner-section">
                <h2>Metodos de Pago</h2>
                <img
                    className="banner-images"
                    src="/pse.png"
                    alt="Banner"
                />
            </div><br /><br />
            <div className="partners-section">
                <h2>Nuestros Aliados</h2>
                <Carousel controls={false} indicators={false} interval={2000} pause={false}>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/aliado1.jpg" alt="Aliado 1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/aliado2.jpg" alt="Aliado 2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/aliado3.jpg" alt="Aliado 3" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/aliado4.jpg" alt="Aliado 4" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/aliado5.jpg" alt="Aliado 5" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/aliado6.jpg" alt="Aliado 6" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/aliado7.jpg" alt="Aliado 7" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="/aliado8.jpg" alt="Aliado 8" />
                    </Carousel.Item>
                </Carousel>
            </div>
            

            <Footer />
        </div>
    )
}

export default Home;