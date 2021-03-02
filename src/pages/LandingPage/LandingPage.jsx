import React, { useState } from 'react';

import MainWrapper from '../../containers/Main';

export default function LandingPage({...mainProps}) {

    const [ main, setMain ] = useState('blue');

    mainProps[main] = true;

    const toggleMain = () => {
        main === 'blue' ? setMain('white') : setMain('blue');
    }

    return (
        <MainWrapper {...mainProps}>
            <button onClick={toggleMain}>toggle bg</button>
        </MainWrapper>
    )
}