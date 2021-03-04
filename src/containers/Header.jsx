import React from 'react';

export default function Header(props) {
   

    return (
        
        <header className="header">
            {props.goBack && <button className="header__button" onClick={props.fn}>{"<"}</button> }
            {props.children}
        </header>
    )
}

