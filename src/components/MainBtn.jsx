import React, { useEffect, useState } from 'react';

export default function MainWButton(props) {

    const [ className, setClassName ] = useState('');

    const getClassName = () => {
        let result = 'main-btn';

        if (props.hasOwnProperty('blue')) result += ' main-btn--blue';
        if (props.hasOwnProperty('white')) result += ' main-btn--white';

        setClassName(result);
    }

    useEffect(getClassName, [props]);

    return (
        <button className={className}>
            {props.children} 
        </button>
    )
}