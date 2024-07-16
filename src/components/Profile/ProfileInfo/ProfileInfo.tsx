import React from 'react';
import { Url } from 'url';
import s from './ProfileInfo.module.css'

type ProfileInfo = {
    photo: string
    name: string
    dateOfBirth: string
    city: string
    education: string
    webSite: string
}

export const ProfileInfo = ({ name, dateOfBirth, city, education, webSite, photo }: ProfileInfo) => {
    return (
        <div className={s.person}>
            <img src={photo} alt="" />
            <div className={s.personBlock} >
                <h3>{name}</h3>
                <p>Date of Birth: {dateOfBirth}</p>
                <p>City: {city}</p>
                <p>Education: {education}</p>
                <p>Web Site: {webSite}</p>
            </div>
        </div>

    );
};

