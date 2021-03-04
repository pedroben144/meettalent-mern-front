import React from 'react';
import { NavLink } from 'react-router-dom';

import { FiHome, FiUsers, FiBriefcase, FiSettings } from 'react-icons/fi';
import { GoDiffAdded } from 'react-icons/go';

export default function Footer() {

    return (
        <>
            <footer className="footer">
                <NavLink className="footer__link" activeClassName="footer__link--active" to="/home"><FiHome /><span className="footer__link__text">Home</span></NavLink>
                <NavLink className="footer__link" activeClassName="footer__link--active" to="/people"><FiUsers /><span className="footer__link__text">Candidatos</span></NavLink>
                <NavLink className="footer__link" activeClassName="footer__link--active--create" to="/create"><GoDiffAdded /><span className="footer__link__text">Crear</span></NavLink>
                <NavLink className="footer__link" activeClassName="footer__link--active" to="/jobs"><FiBriefcase /><span className="footer__link__text">Ofertas</span></NavLink>
                <NavLink className="footer__link" activeClassName="footer__link--active" to="/perfil"><FiSettings /><span className="footer__link__text">Perfil</span></NavLink>
            </footer>
        </>
    )
}