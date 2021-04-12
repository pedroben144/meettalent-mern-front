import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { SiLinkedin, SiGithub, SiGmail, SiMedium, SiBehance } from 'react-icons/si';
import { FaGlobeAmericas } from 'react-icons/fa';

import Header from '../../containers/Header';
import Section from '../../containers/Section';
import { MainContext } from '../../contexts/MainContext';

export default function AboutPage() {

    const { setMainStyle } = useContext(MainContext);
    useEffect(() => setMainStyle("white"), [setMainStyle]);

    let history = useHistory()

    const goBack = () => {
        history.push('/landing');
    }

    return(
        <>
            <Header goBack fn={goBack}>About Meettalent</Header>
            <Section>
                <div className="about__text">Meettalent is a web app concept. It helps companies to find the best talent on the market.</div>
                <div className="about__text about__text--bold">Meet the team:</div>
                <div className="about__people">
                    <div className="about__card">
                        <img className="b-avatarImg b-avatarImg--medium about__card__avatar" src="https://res.cloudinary.com/tamasigerald/image/upload/v1618226570/WhatsApp_Image_2021-04-12_at_1.12.50_PM_mx9ryg.jpg" alt="Gerald Andrei Tamasi" />
                        <div className="about__card__name">Ángel García Lopez</div>
                        <div className="about__card__role">Full stack developer</div>
                        <div className="about__card__social">
                            <a  href="https://www.linkedin.com/in/%C3%A1ngel-garc%C3%ADa-l%C3%B3pez-40a7741b8/" rel="noreferrer" target="_blank">
                                <SiLinkedin />
                            </a>
                            <a href="https://github.com/Angel-GL" rel="noreferrer" target="_blank">
                                <SiGithub />
                            </a>
                        </div>
                    </div>
                    <div className="about__card">
                        <img className="b-avatarImg b-avatarImg--medium about__card__avatar" src="https://res.cloudinary.com/tamasigerald/image/upload/v1616671972/WhatsApp_Image_2021-03-24_at_7.16.58_PM_rdjkdj.jpg" alt="Gerald Andrei Tamasi" />
                        <div className="about__card__name">Argimir Curto Gómez</div>
                        <div className="about__card__role">Full Stack Developer</div>
                        <div className="about__card__social">
                            <a  href="https://www.linkedin.com/in/argimir-curto-g%C3%B3mez-602226140/" rel="noreferrer" target="_blank">
                                <SiLinkedin />
                            </a>
                            <a href="mailto:mailto:argi47@msn.com" rel="noreferrer" target="_blank">
                                <SiGmail />
                            </a>
                        </div>
                    </div>
                    <div className="about__card">
                        <img className="b-avatarImg b-avatarImg--medium about__card__avatar" src="https://res.cloudinary.com/tamasigerald/image/upload/v1618225217/WhatsApp_Image_2021-04-12_at_12.59.31_PM_krx0xt.jpg" alt="Gerald Andrei Tamasi" />
                        <div className="about__card__name">Estefanía Franchy Piña</div>
                        <div className="about__card__role">Back end developer</div>
                        <div className="about__card__social">
                            <a  href="http://linkedin.com/in/estefania-franchy-pi%C3%B1a-82b6b8190" rel="noreferrer" target="_blank">
                                <SiLinkedin />
                            </a>
                        </div>
                    </div>
                    <div className="about__card">
                        <img className="b-avatarImg b-avatarImg--medium about__card__avatar" src="https://res.cloudinary.com/tamasigerald/image/upload/v1615563950/dvmicygbs46sbrzjemty.png" alt="Gerald Andrei Tamasi" />
                        <div className="about__card__name">Gerald Andrei Tamasi</div>
                        <div className="about__card__role">Team leader & Full stack developer</div>
                        <div className="about__card__social">
                            <a  href="https://www.linkedin.com/in/tamasigerald/" rel="noreferrer" target="_blank">
                                <SiLinkedin />
                            </a>
                            <a href="https://github.com/tamasigerald" rel="noreferrer" target="_blank">
                                <SiGithub />
                            </a>
                            <a href="https://tamasigerald.com/" rel="noreferrer" target="_blank">
                                <FaGlobeAmericas />
                            </a>
                        </div>
                    </div>
                    <div className="about__card">
                        <img className="b-avatarImg b-avatarImg--medium about__card__avatar" src="https://res.cloudinary.com/tamasigerald/image/upload/v1618222211/WhatsApp_Image_2021-03-26_at_12.54.17_AM_erd5mp.jpg" alt="Gerald Andrei Tamasi" />
                        <div className="about__card__name">Pedro Benitez</div>
                        <div className="about__card__role">Front end developer</div>
                        <div className="about__card__social">
                            <a  href="http://linkedin.com/in/pedro-benitez-7433521ba" rel="noreferrer" target="_blank">
                                <SiLinkedin />
                            </a>
                        </div>
                    </div>
                    <div className="about__card">
                        <img className="b-avatarImg b-avatarImg--medium about__card__avatar" src="https://res.cloudinary.com/tamasigerald/image/upload/v1618222164/1516623188585_vr5izn.jpg" alt="Gerald Andrei Tamasi" />
                        <div className="about__card__name">Silvia Peral Moral</div>
                        <div className="about__card__role">Concept creator & UX/UI designer</div>
                        <div className="about__card__social">
                            <a  href="https://www.linkedin.com/in/silviaperalmoral/" rel="noreferrer" target="_blank">
                                <SiLinkedin />
                            </a>
                            <a href="https://medium.com/@silviaperalmoral" rel="noreferrer" target="_blank">
                                <SiMedium />
                            </a>
                            <a href="https://www.behance.net/silviaperal" rel="noreferrer" target="_blank">
                                <SiBehance />
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}