import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AiOutlineEdit, AiOutlineCheckCircle } from "react-icons/ai";

import Header from '../../../containers/Header';
import Rectangle from '../../../containers/Rectangle';
import Section from '../../../containers/Section';
import { MainContext } from '../../../contexts/MainContext';
import { LoginContext } from '../../../contexts/LoginContext';
import axios from 'axios';

export default function AccountPage() {

    const { setMainStyle } = useContext(MainContext);
    const { loggedUser, getLoggedUser, setLoggedUser } = useContext(LoginContext);

    const [ edit, setEdit ] = useState(false);

    let history = useHistory();

    const goBack = () => {
        history.push('/profile');
    }

    const handleImageUpload = (e) => {
        const image = e.target.files[0];
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'meettalent');
        data.append('cloud_name', 'tamasigerald');

        axios.post('https://api.cloudinary.com/v1_1/tamasigerald/image/upload', data)
        .then(function(res) {
            const user = {...loggedUser, avatar: res.data.secure_url};
            setLoggedUser(user);
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const localToken = localStorage.getItem('token');
        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${localToken}`,
            }
        }
        const updatedUser = {
            ...loggedUser,
            nif: e.target[0].value,
            email: e.target[1].value,
            name: e.target[2].value,
        };
        const id = loggedUser._id;
        axios.put(process.env.REACT_APP_BASE_URL + '/user/' + id, updatedUser, axiosConfig)
        .then(function(res) {
            getLoggedUser();
        })
        .catch(function(err) {
            console.log(err);
        })
    }

    useEffect(() => {
        setMainStyle('blue');
        getLoggedUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setMainStyle])

    return (
        <>
            <Header goBack fn={goBack}>
                Mi Cuenta
            </Header>
            <Section>
                <img className="account__img b-avatarImg b-avatarImg--big" src={loggedUser.avatar ? loggedUser.avatar : '/assets/images/user-placeholder.jpg'} alt={loggedUser.name} />
                <Rectangle white active>
                    {!edit ? <div className="account account__edit">
                        <div className="account__item input input--blue">{loggedUser.nif}</div>
                        <div className="account__item input input--blue">{loggedUser.email}</div>
                        <div className="account__item input input--blue">{loggedUser.name}</div>
                    </div>
                    :
                    <form onSubmit={(e) => handleSubmit(e)} className="account account__edit">
                        <div className="account__rec">REC</div>
                        <input className="input input--blue account__input" defaultValue={loggedUser.nif} />
                        <input className="input input--blue account__input" defaultValue={loggedUser.email} />
                        <input className="input input--blue account__input" defaultValue={loggedUser.name} />
                        <div className="account__upload">
                            <input className="account__upload__input" type="file" onChange={(e) => handleImageUpload(e)} />
                            <button className="account__upload__btn" type="button">Select photo</button>
                        </div>
                        <button className="account__btn account__btn--submit b-roundBtn b-roundBtn__medium b-roundBtn__edit"><AiOutlineCheckCircle /></button>
                    </form>}
                </Rectangle>
                <div onClick={() => setEdit(!edit)} className="account__btn account__btn--edit b-roundBtn b-roundBtn__medium b-roundBtn__edit"><AiOutlineEdit /></div>
            </Section>
        </>
    )
}