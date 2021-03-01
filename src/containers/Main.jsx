import React, { useEffect, useState } from 'react';

export default function MainWrapper(props) {

    const [ className, setClassName ] = useState('');

    const getClassName = () => {
        let result = 'main';

        if (props.hasOwnProperty('blue')) result += ' main--blue';
        if (props.hasOwnProperty('white')) result += ' main--white';
        if (props.hasOwnProperty('logo')) result += ' main--logo';

        setClassName(result);
    }

    useEffect(getClassName, [props]);

    return (
        <main className={className}>
            {props.children}
        </main>
    )
}