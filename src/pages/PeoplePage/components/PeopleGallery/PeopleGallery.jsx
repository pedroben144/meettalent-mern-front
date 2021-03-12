import React from 'react'
import {Link} from "react-router-dom";
import { TiLocationOutline } from "react-icons/ti";

export default function PeopleGallery(props) {
    

    return (
        <div className="c-peopleGallery-page__parent-container">
            {props.filterPeople.map((candidate,i) => 
                <div className="c-peopleGallery-page__figure-container" key={i}>
                    
                        <figure className="c-peopleGallery-page__figure">
                        <Link to= {'/people/' + candidate._id}><img className="b-avatarImg b-avatarImg--small c-peopleGallery-page__img" src={candidate.avatar} alt=""/></Link>
                            
                            <h3 className="c-peopleGallery-page__h3">{candidate.name} {candidate.surname}</h3>
                            <h4 className="c-peopleGallery-page__h4">{candidate.rol}</h4>
                            <div className="c-peopleGallery-page__location-container">
                            <p className="c-peopleGallery-page__p">{candidate.age} años</p> 
                            <div className="c-peopleGallery-page__icon-container">
                                    <TiLocationOutline className="c-peopleGallery-page__icon"/>
                                    <p className="c-peopleGallery-page__p">{candidate.city}</p>
                            </div>
                            
                            </div>
                        </figure>
                        
                    
                    
                </div>
            )}
            
        </div>
    )
}