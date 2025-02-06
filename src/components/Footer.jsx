import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Asegúrate de crear este archivo para los estilos

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Sobre Nosotros</h2>
                    <p>
                        Somos líderes de servicios médicos especializados, con una gran experiencia y un equipo de expertos altamente calificados, nos destacamos por ofrecer atención de primer nivel a pacientes nacionales e internacionales. Desde cirugía plástica y reconstructiva hasta tratamientos médicos y estéticos, odontología e implantes capilares.
                    </p>
                </div>
                <div className="footer-section links">
                    <h2>Servicios</h2>
                    <ul>
                        <li><Link to="/clinicas">Clínicas</Link></li>
                        <li><Link to="/turismo-medico">Turismo Médico</Link></li>
                        <li><Link to="/implante-capilar">Implante Capilar</Link></li>
                        <li><Link to="/financiacion">Financiación</Link></li>
                        <li><Link to="/contactenos">Contáctenos</Link></li>
                        <li><Link to="/recomendaciones">Recomendaciones</Link></li>
                        <li><Link to="/farmacia">Farmacia</Link></li>
                        <li><Link to="/terminos-condiciones">Términos y Condiciones</Link></li>
                    </ul>
                </div>
                <div className="footer-section partners">
                    <h2>Nuestros Aliados</h2>
                    <ul>
                        <li><a href="https://dhi.com">DHI</a></li>
                        <li><a href="https://orensetours.com">Orense Tours</a></li>
                        <li><a href="https://massaludips.com">Mas Salud IPS</a></li>
                        <li><a href="https://cibarmet.com">CiBarMet</a></li>
                        <li><a href="https://interquirofanos.com">Interquirófanos</a></li>
                        <li><a href="https://101fintech.com">101 Fintech</a></li>
                        <li><a href="https://presentdentalstudio.com">Present Dental Studio</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contáctenos</h2>
                    <p>Tel: (+57) 3104778298</p>
                    <p>Tel: (+57) 3212529556</p>
                    <p>credito@crediplas.com</p>
                    <p>mercadeo@crediplas.com</p>
                    <p>contabilidad@crediplas.com</p>
                </div>
            </div>
            <div className="footer-social">
                <a href="https://facebook.com" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="https://instagram.com" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="https://linkedin.com" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </footer>
    );
};

export default Footer;