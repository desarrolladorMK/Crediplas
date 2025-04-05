import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de crear este archivo CSS

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <img src="/logo.jpg" alt="Logo" className="logo-img" />
                </div>
                <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
                    <li><Link to="/turismo" onClick={toggleMenu}>Turismo Médico</Link></li>
                    <li><Link to="/implante" onClick={toggleMenu}>Implante Capilar</Link></li>
                    <li><Link to="/financiacion" onClick={toggleMenu}>Financiación</Link></li>
                    <li><Link to="/clinica" onClick={toggleMenu}>Clínicas</Link></li>
                    <li><Link to="/medicina" onClick={toggleMenu}>Medicina Estética</Link></li>
                    <li><Link to="https://www.101fintech.com/SolicitudTarjeta.aspx?fnt=Crediplas" onClick={toggleMenu}>Solicitud Tarjeta Crédito</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

