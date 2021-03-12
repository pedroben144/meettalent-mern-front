import React, { useContext } from 'react';
import { LoadingContext } from '../../contexts/LoadingContext';
import './Loading.scss';

export function Loading(){

    const {isLoading} = useContext(LoadingContext);
    
    return(
        isLoading && <div className='c-loading'>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}
