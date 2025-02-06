import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Asegúrate de crear este archivo para los estilos personalizados

const Home = () => {
    return (
        <div>
            <Header />
            <Carousel controls={true} indicators={false} interval={null}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/cirujanos.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/bariatrica.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/odontologia.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/implantes.jpg"
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/clinicas.jpg"
                        alt="Fifth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/turismo.jpg"
                        alt="Sixth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/financiacion.jpg"
                        alt="Seventh slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/suministros.jpg"
                        alt="Eighth slide"
                    />
                </Carousel.Item>
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
            </div>
            <div className="banner-section">
                <h2>Metodos de Pago</h2>
                <img
                    className="banner-image"
                    src="/pse.png"
                    alt="Banner"
                />
            </div>
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