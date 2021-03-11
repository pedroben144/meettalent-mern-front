import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { ImSphere } from "react-icons/im";

export default function SocialIcons (props) {
    return(
        <div style={{"width": "80%"}}>
        <h5 className="c-social__text">Redes de empresa</h5>
        <div className="c-social__social-container">
            <div className="c-social__icon-container"><FaTwitter className="c-social__icon"/></div>
            <div className="c-social__icon-container" ><FaInstagram className="c-social__icon"/></div>
            <div className="c-social__icon-container"><FaFacebookF className="c-social__icon"/></div>
            <div className="c-social__icon-container"><ImSphere className="c-social__icon"/></div>
        </div>
            
        </div>
    )
}