import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export default function RoundBtn(props){

    return(

        <div>
            {props.edit && <button className="b-roundBtn b-roundBtn__medium b-roundBtn__edit"><AiOutlineEdit className="b-roundBtn__marginIcon" /></button>}
            {props.profile && <button className="b-roundBtn b-roundBtn__medium b-roundBtn__profile"><FiUser className="b-roundBtn__marginIcon"/></button>}
            {props.plusSmall && <button className="b-roundBtn b-roundBtn__small b-roundBtn__plus b-roundBtn__plus--small"><FiPlus className="b-roundBtn__marginIcon"/></button>}
            {props.plusBig && <button className="b-roundBtn b-roundBtn__big b-roundBtn__plus"><FiPlus className="b-roundBtn__marginIcon"/></button>}

        </div>
        
        
    );
}