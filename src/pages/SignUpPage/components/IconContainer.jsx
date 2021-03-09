import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import { ImAppleinc } from "react-icons/im";




export function IconContainer(){
    return(
        <div className="b-IconContainerFather">
            <p className="b-IconContainer__text">Crear cuenta con</p>
            <div className="b-IconContainer">
                <div className="b-IconContainer__container b-IconContainer__facebook"><ImFacebook/></div>
                <div className="b-IconContainer__container b-IconContainer__google"><FcGoogle/></div>
                <div className="b-IconContainer__container b-IconContainer__apple"><ImAppleinc/></div>
            </div>
        </div>
    );   
}


