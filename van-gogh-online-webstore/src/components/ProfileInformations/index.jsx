import React, { useState } from 'react';
import Button from '../Button'
import { TextField, Typography } from '@mui/material';
import './style.css';

export default function ProfileInformations({ setShowGallery }) {
    const [profileInformations, setProfileInformation] = useState([
        {
            field: "Name",
            value: "VanGogh"
        },
        {
            field: "Email",
            value: "vangogh@gmail.com"
        },
        {
            field: "Adress",
            value: "Street 10, 430, Zundert - Netherlands"
        },
        {
            field: "Telephone",
            value: "+31 (0)76 597 85 90"
        }
    ])
    return (
        <div className='informations'>
            <Typography variant='profileSectionTitle'>Informations</Typography>
            <div className='information-fields'>
                {profileInformations.map(
                    (info) => <TextField className='TextField' label={info.field} variant='outlined' margin='normal' defaultValue={info.value} />
                )}
                <div className='buttons'>
                    <Button onClick={() => setShowGallery(true)} styles={{ backgroundColor: "#C4C4C4" }} >Update profile picture</Button>
                    <Button styles={{ backgroundColor: "black" }} >Save</Button>
                </div>
            </div>
        </div>
    );
}
