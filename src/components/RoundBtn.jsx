import React from 'react';

export function RoundBtn(props){

    return(

        <div>
            {props.edit && <button className="b-roundBtn b-roundBtn__small"><span className="icon-edit b-iconRoundBtn__edit"></span></button>}
            {props.profile && <button className="b-roundBtn b-roundBtn__small"><span className="icon-profile b-iconRoundBtn__profile"></span></button>}
            {props.plusSmall && <button className="b-roundBtn b-roundBtn__small"><span className="icon-plus b-iconRoundBtn__plus"></span></button>}
            {props.plusBig && <button className="b-roundBtn b-roundBtn__big"><span className="icon-plus b-iconRoundBtn__plus"></span></button>}

        </div>
        
        
    );
}