import React from 'react';
import './Login.css';
import { logo } from '../../assets';
import { Button } from '@mui/material';
import { auth, provider } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {
	const dispatch = useDispatch();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then(({ user }) => {
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						photoUrl: user.photoUrl
					})
				);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className='login'>
			<div className='login__container'>
				<img src={logo} alt='logo' />
			</div>
			<Button onClick={signIn} color='primary' variant='contained'>
				Login
			</Button>
		</div>
	);
}

export default Login;
