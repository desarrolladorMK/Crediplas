import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css"; // Asegúrate de crear este archivo para los estilos personalizados
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

// Datos de las imágenes con su información
const slides = [
  { src: "/cirujanos.jpg", alt: "", title: "", route: "/cirujano-context" },
  { src: "/bariatrica.jpg", alt: "", title: "", route: "/bariatricos" },
  { src: "/odontologia.jpg", alt: "", title: "", route: "/Odontologia" },
  {
    src: "/implantes.jpg",
    alt: "",
    title: "",
    description: "Implantes dentales y corporales.",
  },
  { src: "/clinicas.jpg", alt: "", title: "", route: "/Clinica" },
  {
    src: "/turismo.jpg",
    alt: "",
    title: "",
    description: "Experiencias de turismo médico.",
  },
  {
    src: "/suministros.jpg",
    alt: "",
    title: "",
    description: "Suministros y equipos médicos.",
  },
];

// Componente Home con el carrusel
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <br />
      <br />
      <Carousel controls={true} indicators={false} interval={null}>
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              src={slide.src}
              alt={slide.alt}
              className="d-block w-100"
              onClick={() => navigate(slide.route)}
              style={{
                cursor: "pointer",
                objectFit: "cover",
                height: "auto",
              }}
            />
            <Carousel.Caption>
              <h3>{slide.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <br />
      <br />

      <div className="banner-section">
        <h2>Conoce nuestros métodos de financiación</h2>
        <a
          href="https://www.101fintech.com/SolicitudTarjeta.aspx?fnt=Crediplas"
          className="banner-link"
        >
          <img
            className="banner-image"
            src="/Baner.jpg"
            alt="Banner de financiación"
            loading="lazy"
          />
        </a>
      </div>

      <div className="banner-section">
        <h2>Contáctanos</h2>
        <a
          href="https://api.whatsapp.com/send?phone=573207334386"
          target="_blank"
          rel="noopener noreferrer"
          className="banner-link"
        >
          <img
            className="banner-image"
            src="/contacto.jpg"
            alt="Banner de contacto"
            loading="lazy"
          />
        </a>
      </div>

      <br />
      <br />

      <div className="testimonials-section">
        <h2>Testimonios</h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <img
              src="/test1.jpg"
              alt="Testimonio 1"
              className="testimonial-image"
              loading="lazy"
            />
          </div>
          <div className="testimonial-card">
            <img
              src="/test2.jpg"
              alt="Testimonio 2"
              className="testimonial-image"
              loading="lazy"
            />
          </div>
          <div className="testimonial-card">
            <img
              src="/test3.jpg"
              alt="Testimonio 3"
              className="testimonial-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="metodos">
        <h2>Metodos de Pago</h2>
        <img
          className="metodos-image"
          src="/pse.png"
          alt="Banner"
          loading="lazy"
        />
      </div>
      <br />
      <br />
      <div className="partners-section">
        <h2>Nuestros Aliados</h2>
        <Carousel
          controls={false}
          indicators={false}
          interval={2000}
          pause={false}
        >
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
  );
};

export default Home;
