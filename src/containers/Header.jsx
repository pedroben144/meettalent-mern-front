import React from 'react';

export  function Header(props) {
   

    return (
        
        <header className="header">
            {props.goBack && <span>{"<"}</span> }
        </header>
    )
}

