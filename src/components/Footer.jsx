import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn, faTiktok,faWhatsapp  } from '@fortawesome/free-brands-svg-icons';
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
                        <li><Link to="/Clinica">Clínicas</Link></li>
                        <li><Link to="/">Turismo Médico</Link></li>
                        <li><Link to="/implante">Implante Capilar</Link></li>
                        <li><Link to="/financiacion">Financiación</Link></li>
                        <li><Link to="https://api.whatsapp.com/send?phone=573207334386">Contáctenos</Link></li>
                        <li><Link to="">Recomendaciones</Link></li>
                        <li><Link to="">Farmacia</Link></li>
                        <li><Link to="">Términos y Condiciones</Link></li>
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
      <a href="https://www.facebook.com/people/Crediplas/100092009985178/?mibextid=LQQJ4d" className="social-icon">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://x.com/crediplas_?s=21&t=4yYuGZm5s84KA_Ec_RfFCg" className="social-icon">
        <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a href="https://www.instagram.com/crediplas__/?igshid=YmMyMTA2M2Y%3D" className="social-icon">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/in/crediplas-undefined-2a6416275/" className="social-icon">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a href="https://www.tiktok.com/@crediplas_" className="social-icon">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
      <a href="https://api.whatsapp.com/send?phone=573207334386" className="social-icon">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
        </footer>
    );
};

export default Footer;