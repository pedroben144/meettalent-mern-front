import React from 'react';

export default function StartUp(props) {

    

    return (
        <div className="start-up">
            <div className="start-up__container">
            {props.children} 
                <img className="start-up__logo" src="assets/images/logo.svg" alt=""/>
                <img className="start-up__logo-text" src="assets/images/logo-words.png" alt="logo"/>
            </div>
        </div>
        
    )
}