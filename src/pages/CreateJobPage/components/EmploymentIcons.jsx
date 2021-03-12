import React from 'react';
import { FaLinkedinIn} from "react-icons/fa";



export default function EmploymentIcons(props) {
    return(
        <div style={{"width": "80%"}}>
            <h5 className="c-employment__text">Portales de empleo</h5>
            <div className="c-employment__employIcons-container">
                <div className="c-employment__img-container "><img className="c-employment__img--border" src="/assets/images/v.jpeg" alt="v.jpeg"/></div>
                <div className="c-employment__img-container c-employment__img-container--icons"><img className="c-employment__img" src="/assets/images/infoEmpleo.jpeg" alt="infoEmpleo.jpeg"/></div>
                <div className="c-employment__in-container"><FaLinkedinIn className="c-employment__in"/></div>
                <div className="c-employment__img-container c-employment__img-container--icons"><img className="c-employment__img" src="/assets/images/infojobs.jpeg" alt="infojobs.jpeg"/></div>
                <div className="c-employment__img-container c-employment__img-container--icons"><img className="c-employment__img" src="/assets/images/indeed.jpeg" alt="indeed.jpeg"/></div>
                <div className="c-employment__img-container c-employment__img-container--te"><img className="c-employment__img" src="/assets/images/te.jpeg" alt="te.jpeg"/></div>
                  
            </div>
            
        </div>
    )
}