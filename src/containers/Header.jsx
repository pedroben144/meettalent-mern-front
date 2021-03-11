import React from 'react';

import { FiChevronLeft } from "react-icons/fi";

export default function Header(props) {
   

    return (
        
        <header className="header">
            {props.goBack && <span className="header__span" onClick={props.fn}><FiChevronLeft/></span> }
            {props.children}
        </header>
    )
}

 