import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { routes } from './routes';
import Header from './components/header';
import Sidebar from './components/sidebar';
import EmailList from './components/emailList.js';
import SendMail from './components/sendMail.js';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './components/login';
import { auth } from './firebase';

function App() {
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						photoUrl: user.photoUrl
					})
				);
			}
		});
	}, []);

	return !user ? (
		<Login />
	) : (
		<div className='app'>
			<Header />

			<div className='app__body'>
				<Sidebar />
				<Routes>
					{routes.map((route, idx) => (
						<Route key={idx} path={route.path} element={<route.component />} />
					))}
					<Route path='/*' element={<EmailList />} />
				</Routes>
			</div>

			{sendMessageIsOpen && <SendMail />}
		</div>
	);
}

export default App;
