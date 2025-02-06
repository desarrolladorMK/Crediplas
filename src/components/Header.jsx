import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de crear este archivo CSS

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <img src="/logo.jpg" alt="Logo" />
                </div>
                <ul className="nav-links">
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/turismo-medico">Turismo Médico</Link></li>
                    <li><Link to="/implante-capilar">Implante Capilar</Link></li>
                    <li><Link to="/financiacion">Financiación</Link></li>
                    <li><Link to="/clinicas">Clínicas</Link></li>
                    <li><Link to="/medicina-estetica">Medicina Estética</Link></li>
                    <li><Link to="/solicitud-tarjeta-credito">Solicitud Tarjeta Crédito</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;