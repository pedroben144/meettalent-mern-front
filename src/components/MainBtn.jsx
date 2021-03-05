import React, { useContext } from 'react';
import { MainContext } from '../contexts/MainContext';

export default function MainWButton(props) {

    const { mainStyle } = useContext(MainContext);

    const getClassName = () => {
        let className = 'main-btn';

        switch (mainStyle) {
            case 'white':
                className += ' main-btn--blue';
                break;
            case 'blue':
                className += ' main-btn--white';
                break;
            case 'logo':
                className += ' main-btn--blue';
                break;
            default:
                break;
        }

        return className;
    }

    return (
        <button className={getClassName()} onClick={props.fn}>
            {props.children} 
        </button>
    )
}