import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink, useHistory } from "react-router-dom";

import { MainContext } from "../../contexts/MainContext";
import Section from "../../containers/Section";
import MainWButton from "../../components/MainBtn";
import axios from "axios";
import { LoginContext } from "../../contexts/LoginContext";
import Header from "../../containers/Header";

export function LoginPage() {
  const { setMainStyle } = useContext(MainContext);
  useEffect(() => setMainStyle("blue"), [setMainStyle]);


  const { setIsLogged } = useContext(LoginContext);

  const { register, handleSubmit, errors, reset } = useForm();

  let history = useHistory();

  const doSubmit = (data) => {
    let User = {
      "email": data.email,
      "password": data.password
    }
    axios.post(process.env.REACT_APP_BASE_URL + "/login", User)
    .then(function(res) {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.data.user);
      setIsLogged(true);
      history.push('/home');
    })
    .catch(function(err) {
      console.log(err);
    })
    reset();
  };

  return (
    <>
      <Header>
        <Link to="/about" className="c-login-page__restore-link">Meet the team</Link>
      </Header>
      <Section>
        <div className="c-login-page">
          <div className="c-login-page__imgs-cont">
            <img
              //   className="swiper-slide__logo swiper-slide__logo--1"
              className="c-login-page__logo-img"
              src="/assets/images/logo.svg"
              alt="Logo Img"
            />
            <img
              //   className="swiper-slide__logo swiper-slide__logo--2"
              className="c-login-page__text-logo-img"
              src="/assets/images/logo-words.png"
              alt="Title Logo Img"
            />
          </div>
          <form onSubmit={handleSubmit(doSubmit)}>
            <div className="c-login-page__input-cont">
              <label className="c-login-page__label" htmlFor="email">
                Email ID
              </label>
              <div className="c-login-page__input-cont-2">
                <input
                  className="input input--blue"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email ID"
                  ref={register({ required: true })}
                />
              </div>
              {errors.email && (
                <span className="c-login-page__error-message">
                  Es necesario introducir un email
                </span>
              )}
            </div>

            <div className="c-login-page__input-cont c-login-page__input-cont--margin-top">
              <label className="c-login-page__label" htmlFor="password">
                Contraseña
              </label>
              <div className="c-login-page__input-cont-2">
                <input
                  className="input input--blue"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  ref={register({ required: true })}
                />
              </div>
              {errors.password && (
                <span className="c-login-page__error-message">
                  Es necesario introducir una contraseña
                </span>
              )}
            </div>

            <div className="c-login-page__submit-cont">
              <MainWButton>Comenzar</MainWButton>
            </div>
            {/* <input type="submit" value="Comenzar" /> */}
          </form>
          <div className="c-login-page__restore-pass-cont">
            <p className="c-login-page__restore-pass-txt">
              ¿No puedes iniciar sesión?
              <NavLink
                className="c-login-page__restore-link"
                exact
                to="/recover"
              >
                Restablecer la contraseña
              </NavLink>
            </p>
          </div>
          <div className="c-login-page__decoration-bar-cont">
            <div className="c-login-page__line-decoration"></div>
            <div className="c-login-page__circle-decoration"></div>
            <div className="c-login-page__line-decoration"></div>
          </div>
          <div className="c-login-page__new-account-cont">
            <NavLink
              className="c-login-page__new-account-link"
              exact
              to="/signup"
            >
              Crear nueva cuenta
            </NavLink>
          </div>
        </div>
      </Section>
    </>
  );
}
