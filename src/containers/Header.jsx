import React, { useContext } from 'react';

import { FiChevronLeft } from "react-icons/fi";
import { MainContext } from '../contexts/MainContext';

export default function Header(props) {

    const { mainStyle } = useContext(MainContext);

    const getClassName = () => {
        let className = 'header';

        if (mainStyle === 'blue') {
            className += ' header--white'
        }

        return className;
    }

    return (
        
        <header className={getClassName()}>
            {props.goBack && <span className="header__span" onClick={props.fn}><FiChevronLeft/></span> }
            {props.children}
        </header>
    )
}

 