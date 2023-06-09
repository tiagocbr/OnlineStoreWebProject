import React, { useState } from 'react';
import { Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router';
import Button from '../Button';
import './style.css';


export default function ProfileLogout() {

	const navigate = useNavigate();

	let handleNavigation = (e) => {
		e.preventDefault();
        navigate('/');
	}
	return (
		<div className='logout'>
			<Typography variant='profileSectionTitle'>Logout</Typography>
			<Typography variant='mainSubtitle'>Are you sure you want to logout?</Typography>
			<Button onClick={(e) => handleNavigation(e)} styles={{ backgroundColor: 'black'}}>Logout</Button>
		</div>
	);
}