import React, { useEffect, useState } from 'react';

export default function Rectangle(props) {

    const [ className, setClassName ] = useState('');

    const getClassName = () => {
        let result = 'rectangle';

        if (props.hasOwnProperty('blue')) result += ' rectangle--blue';
        if (props.hasOwnProperty('white')) result += ' rectangle--white';
        if (props.active) result += ' rectangle--active'

        setClassName(result);
    }

    useEffect(getClassName, [props]);

    return (
        <div className={className}>
            {props.children} 
        </div>
    )
}