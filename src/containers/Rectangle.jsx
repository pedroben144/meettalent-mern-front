import React, { useEffect, useState } from 'react';

export default function Rectangle(props) {

    const [ className, setClassName ] = useState('');

    const getClassName = () => {
        let result = 'rectangle';

        if (props.hasOwnProperty('blue')) result += ' rectangle--blue';
        if (props.hasOwnProperty('white')) result += ' rectangle--white';

        setClassName(result);
    }

    useEffect(getClassName, [props]);

    return (
        <div className={className}>
            {props.children} 
        </div>
    )
}