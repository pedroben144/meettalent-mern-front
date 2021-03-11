import React, { useContext, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";

import { MainContext } from "../../contexts/MainContext";
import { FooterContext } from "../../contexts/FooterContext";
import { LoginContext } from "../../contexts/LoginContext";
import Header from "../../containers/Header";
import Section from "../../containers/Section";
import { useHistory } from "react-router";

export function ProfilePage() {

  const { setMainStyle } = useContext(MainContext);
  const { setFooter } = useContext(FooterContext);
  const { loggedUser, getLoggedUser } = useContext(LoginContext);

  let history = useHistory()
  
  const exitProfile = () => {
    history.push('/home')
  }

  const goTo = (string) => {
    history.push(string);
  }

  const logOut = () => {
    localStorage.clear();
    history.push('/landing');
  }
  
  useEffect(() => {setMainStyle("white"); setFooter(false); getLoggedUser()} , [setMainStyle, setFooter, getLoggedUser]);

  return (
    <>
      <Header goBack fn={exitProfile}>
        Perfil
      </Header>
      <Section>
        <div className="profile-header">
          <img className="profile-header__img b-avatarImg b-avatarImg--big" src={loggedUser.avatar ? loggedUser.avatar : 'assets/images/user-placeholder.jpg'} alt="user avatar"/>
          <div className="profile-header__name">{loggedUser.name}</div>
        </div>
        <div className="profile-content">
            <div onClick={() => goTo('/profile/account')} className="profile-content__btn">
              <div className="profile-content__btn__text">Tu cuenta</div>
              <div className="profile-content__btn__icon"><FiChevronRight /></div>
            </div>
            <div className="profile-content__btn">
              <div className="profile-content__btn__text">Administradores</div>
              <div className="profile-content__btn__icon"><FiChevronRight /></div>
            </div>
            <div className="profile-content__btn">
              <div className="profile-content__btn__text">Suscripción y facturación</div>
              <div className="profile-content__btn__icon"><FiChevronRight /></div>
            </div>
            <div className="profile-content__btn">
              <div className="profile-content__btn__text">Configuración</div>
              <div className="profile-content__btn__icon"><FiChevronRight /></div>
            </div>
            <div className="profile-content__btn">
              <div className="profile-content__btn__text">Ayuda</div>
              <div className="profile-content__btn__icon"><FiChevronRight /></div>
            </div>
            <div onClick={logOut} className="profile-content__btn">
              <div className="profile-content__btn__text profile-content__btn__text--red">Log out</div>
              <div className="profile-content__btn__icon"><FiChevronRight /></div>
            </div>
            
        </div>
      </Section>
    </>
  );
}
