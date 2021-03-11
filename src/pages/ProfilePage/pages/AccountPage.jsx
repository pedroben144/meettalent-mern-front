import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import Header from '../../../containers/Header';
import Rectangle from '../../../containers/Rectangle';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';
import { LoginContext } from '../../../contexts/LoginContext';

export default function AccountPage() {

    const { setMainStyle } = useContext(MainContext);
    const { loggedUser, getLoggedUser } = useContext(LoginContext);


    let history = useHistory();

    const goBack = () => {
        history.push('/profile');
    }

    useEffect(() => {
        setMainStyle('blue');
        getLoggedUser();
    }, [setMainStyle, getLoggedUser])

    return (
        <>
            <Header goBack fn={goBack}>
                Mi Cuenta
            </Header>
            <Section>
                <img className="account__img b-avatarImg b-avatarImg--big" src={loggedUser.avatar ? loggedUser.avatar : '/assets/images/user-placeholder.jpg'} alt={loggedUser.name} />
                <Rectangle white active>
                    <div className="account">
                        <div className="account__item">{loggedUser.nif}</div>
                        <div className="account__item">{loggedUser.email}</div>
                        <div className="account__item">{loggedUser.name}</div>
                    </div>
                </Rectangle>
            </Section>
        </>
    )
}