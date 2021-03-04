import React, { useContext } from 'react';
import { MainContext } from '../contexts/MainContext';

export default function MainWrapper(props) {

    const { mainStyle } = useContext(MainContext);

    const setClassName = () => {
        let className = 'main';

        switch (mainStyle) {
            case 'blue':
                className += ' main--blue';
                break;
            case 'white':
                className += ' main--white';
                break;
            case 'logo':
                className += ' main--blue main--logo';
                break;
            default:
                break;
        }

        return className;
    }

    return (
        <main className={setClassName()}>
            {props.children}
        </main>
    )
}